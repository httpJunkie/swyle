/* eslint-disable */
import React, { Component, useRef } from 'react'
import { graphql } from 'react-apollo';
import { Query, Mutation } from "react-apollo";
import mutation from './mutations/sign_in_user';
import currentUser from './queries/current_user';
import $ from 'jquery';
import ErrorsModal from './errors_modal';
import {Redirect} from 'react-router-dom';


/**
 * User log in form
 */
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            email: "",
            errors: null
        }
        // This format is far, far easier to debug than using the arrow methods.
        this.handleFormChange = this.handleFormChange.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

     demoLogin(event) {
        event.preventDefault();
            // const login = "demo@demo.com";
            // const password = "demodemo";
            // const emailField = document.getElementById("email-field");
            // const passwordField = document.getElementById("password-field");
            // emailField.value = login;
            // passwordField.value = password;
        this.setState({ email: "demo@demo.com", password: "demodemo" }, () => {
           const submit = document.getElementById("form-submit");
           submit.click();
        });
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
                {({ data, loading }) => {
                if (loading) return "...Loading";
                if (!data.currentUser) {
                    return (
                    <Mutation
                        mutation={mutation}
                            update={(cache, { data: { signInUser } }) => {
                            cache.writeQuery({
                                query: currentUser,
                                data: { currentUser: signInUser.user }
                                    });
                                }}
                        >
                            {(signInUser, { loading: authenticating }) =>
                            authenticating ? (
                                "..."
                            ) :  (
                                <div className="session-page" >
                                    <form onSubmit={event => {
                                                event.preventDefault();
                                                signInUser({
                                                    variables: {
                                                        email: this.state.email,
                                                        password: this.state.password
                                                    }
                                                }).then(res => {
                                                    const token = res.data.signInUser.token
                                                    if (token) {
                                                        localStorage.setItem("mlToken", token)
                                                    }

                                                }).then(() => {
                                                    this.props.history.push('/dashboard')
                                                })
                                                    .catch(res => {
                                                        this.setState({ errors: res.graphQLErrors })
                                                    })
                                    }} className="session-form">
                                        <h1>Log In</h1>
                                        <span className="session-form-label">Email</span>
                                        <input id="email-field" className="auth-field" type="text" value={this.state.email} 
                                            onChange={this.handleFormChange('email')} placeholder="Email" />
                                        <span className="session-form-label">Password</span>
                                        <input id="password-field" className="auth-field" type="password" value={this.state.password} 
                                            onChange={this.handleFormChange('password')} placeholder="Password" />
                                        <div className="form-footer">
                                            <input id="form-submit" className="submit" type="submit" />
                                            <button className="demo-login" onClick={this.demoLogin}>DEMO!</button>
                                        </div>
                                    </form>
                                    { this.state.errors && <ErrorsModal errors={this.state.errors} clearErrors={this.clearErrors} /> }
                                </div>
                                )

                }
                </Mutation>
                );
            }
            return <Redirect to="/" />
            }}
            </Query>
         );
      }
}


export default(Login);