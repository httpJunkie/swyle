import React, {Component} from 'react';
import {Redirect } from 'react-router-dom';
import {Query, Mutation} from 'react-apollo';
import mutation from './mutations/register';
import currentUser from './queries/current_user';
import $ from 'jquery';
import ErrorsModal from './errors_modal';

class Register extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                username: null,
                email: null,
                password: null,
                passwordConfirm: null
            }
        this.handleFormChange = this.handleFormChange.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    }
    clearErrors() {
        this.setState({ errors: null })
    }

    handleFormChange(field) {
        return event => this.setState({
            [field]: event.currentTarget.value,
        });
    }

    allowOrPreventScrolling() {
        if (this.state.errors) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    }

    render() {
        this.allowOrPreventScrolling();
        return (
            <Query query={currentUser}>
                {({ data, error, loading }) => {
                    if (loading) return "...Loading";
                    if (!data.currentUser) {
                        return (
                            <Mutation
                                mutation={mutation}
                                update={(cache, { data: { createUser } }) => {
                                    cache.writeQuery({
                                        query: currentUser,
                                        data: { currentUser: createUser.user }
                                    });
                                }}
                            >
                                {(signInUser, { loading: authenticating }) =>
                                    authenticating ? (
                                        "..."
                                    ) : (
                                            <div className="session-page" >
                                                <form onSubmit={event => {
                                                    event.preventDefault();
                                                    signInUser({
                                                        variables: {
                                                            email: this.state.email,
                                                            password: this.state.password
                                                        }
                                                    }).then(res => {
                                                        console.log("result:", res)
                                                        const token = res.data.signInUser.token
                                                        if (token) {
                                                            localStorage.setItem("mlToken", token)
                                                        }

                                                    }).then(() => {
                                                        this.props.history.push('/')
                                                    })
                                                        .catch(res => {
                                                            this.setState({ errors: res.graphQLErrors })
                                                        })
                                                }} className="session-form">
                                                    <h1>Sign Up</h1>
                                                    <input className="auth-field" type="text" value={this.state.email}
                                                        onChange={this.handleFormChange('email')} placeholder="Email" />
                                                    <input className="auth-field" type="text" value={this.state.username}
                                                        onChange={this.handleFormChange('username')} placeholder="username" />
                                                    <input className="auth-field" type="password" value={this.state.password}
                                                        onChange={this.handleFormChange('password')} placeholder="Password" />
                                                    <input className="auth-field" type="password" value={this.state.passwordConfirm}
                                                        onChange={this.handleFormChange('passwordConfirm')} placeholder="Confirm Password" />
                                                    <div className="form-footer">
                                                        <input className="submit" type="submit" />
                                                    </div>
                                                </form>
                                                {this.state.errors && <ErrorsModal errors={this.state.errors} clearErrors={this.clearErrors} />}
                                            </div>
                                        )

                                }
                            </Mutation>
                        );

                    }
                    return <Redirect to="/" />
                }}
            </Query>
        )
    }
}

export default Register;