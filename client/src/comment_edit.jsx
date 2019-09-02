import React, {Component} from 'react';
import {Mutation} from 'react-apollo';

class CommentEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: this.props.body
        }
    }
}

export default CommentEdit;