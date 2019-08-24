/* eslint-disable */
import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import mutation from './mutations/sign_in_user';
import query from './queries/current_user';
import $ from 'jquery';

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
        this.login = this.login.bind(this);
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

    login() {
        event.preventDefault();
        this.props.mutate({
            variables: {
                email: {
                    email: this.state.email,
                    password: this.state.password
                    }     
            },
            refetchQueries: [{ query }]
        }).then(res => {
            this.props.history.push('/')
        })
            .catch(res => {
                this.setState({ errors: res.graphQLErrors })
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
            <div className="session-page" >
                <form onSubmit={this.login} className="session-form">
                    <h1>Log In</h1>
                    <input className="auth-field" type="text" value={this.state.email} onChange={this.handleFormChange('email')} placeholder="Email" />
                    <input className="auth-field" type="password" value={this.state.password} onChange={this.handleFormChange('password')} placeholder="Password" />
                    <div className="form-footer">
                        <input className="submit" type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}


export default graphql(query)(
    graphql(mutation)(Login)
);

// { this.state.errors && <ErrorsModal errors={this.state.errors} clearErrors={this.clearErrors} /> }
