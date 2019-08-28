import React, {Component} from 'react';
import {Redirect } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props) {
            this.state={
                username: null,
                email: null,
                password: null,
                passwordConfirm: null
            }
        }
    }
}