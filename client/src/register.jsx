import React, {Component} from 'react';
import {Redirect } from 'react-router-dom';
import {Query, Mutation} from 'react-apollo';

class Register extends Component {
    constructor(props) {
        super(props) 
            this.state={
                username: null,
                email: null,
                password: null,
                passwordConfirm: null
            }
    }
}

export default Register;