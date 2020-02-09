import React, {Component} from 'react';
import {Redirect } from 'react-router-dom';
import {Query, Mutation} from 'react-apollo';
import mutation from './mutations/register';
import currentUser from './queries/current_user';
import $ from 'jquery';
import ErrorsModal from './errors_modal';
import {validateEntry} from './helpers';
import InlineError from './inline_error';

/**
 * Form for creating a new user. 
 */
class Register extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                username: "",
                email: "",
                password: "",
                passwordConfirm: "",
                usernameValid: null,
                emailValid: null,
                passwordValid: null
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
            [`${field}Valid`]: validateEntry(field, event.currentTarget.value)
        });
    }

    /**
     * Nifty trick for making one's error modals appear to cover the entire page when it's really
     * just covering some visible portion.
     */
    allowOrPreventScrolling() {
        if (this.state.errors) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    }

    render() {
        this.allowOrPreventScrolling();
        const readyToSubmit = (this.state.passwordValid && this.state.usernameValid && this.state.emailValid && this.state.password === this.state.passwordConfirm)
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
                                {(createUser, { loading: authenticating }) =>
                                    authenticating ? (
                                        "..."
                                    ) : (
                                            <div className="session-page" >
                                                <form onSubmit={event => {
                                                    event.preventDefault();
                                                    createUser({
                                                        variables: {
                                                            email: this.state.email,
                                                            username: this.state.username,
                                                            password: this.state.password,
                                                        }
                                                    }).then(res => {
                                                        const token = res.data.createUser.token
                                                        const errors = res.data.createUser.errors
                                                    
                                                        if (token) {
                                                            localStorage.setItem("mlToken", token)
                                                        }
                                                        if (errors) {
                                                            this.setState({errors})
                                                        } else {
                                                            this.props.history.push('/')
                                                        }           
                                                    }).catch(res => {
                                                            this.setState({ errors: res.graphQLErrors })
                                                        })
                                                }} className="session-form">
                                                    <h1>Sign Up</h1>
                                                    <span className="session-form-label">Email</span>
                                                    <div className="session-form-input-wrapper">
                                                        <input className={`auth-field ${this.state.emailValid === false ? 'invalid' : ''}`} type="text" value={this.state.email}
                                                            onChange={this.handleFormChange('email')} />
                                                        <InlineError message={"Please enter a valid email address."} visible={this.state.emailValid === false} />
                                                    </div>
                                                    <span className="session-form-label">Username</span>
                                                    <div className="session-form-input-wrapper">
                                                        <input className={`auth-field ${this.state.usernameValid === false ? 'invalid' : ''}`} type="text" value={this.state.username}
                                                            onChange={this.handleFormChange('username')}  />
                                                        <InlineError message={"Letters, numbers, hyphens, and underscores only please"} visible={this.state.usernameValid === false} />
                                                    </div>

                                                    <span className="session-form-label">Password</span>
                                                    <div className="session-form-input-wrapper">
                                                        <input className={`auth-field ${this.state.passwordValid === false ? 'invalid' : ''}`}type="password" value={this.state.password}
                                                            onChange={this.handleFormChange('password')} />
                                                        <InlineError message={"Password must be six characters or more, non-sequential and with fewer than three repeated characters"} visible={this.state.passwordValid === false} />
                                                    </div>

                                                    <span className="session-form-label">Confirm Password</span>
                                                    <div className="session-form-input-wrapper">
                                                         <input className={`auth-field ${this.state.password !== this.state.passwordConfirm ? 'invalid' : ''}`} type="password" value={this.state.passwordConfirm} 
                                                                onChange={this.handleFormChange('passwordConfirm')}  />
                                                        <InlineError message={"Password confirmation must match password"} visible={this.state.password !== this.state.passwordConfirm} />
                                                    </div>
                                                    <div className="form-footer">
                                                        <input className={`submit ${readyToSubmit ? "" : "disabled"}`} type="submit" name="Register" disabled={!readyToSubmit}/>
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