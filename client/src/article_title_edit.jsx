import React, { Component } from 'react';

class ArticleTitleEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            id: this.props.id
        }
    }
    render() {
        return (
            <div>placeholder</div>
        )
    }
}

export default ArticleTitleEdit;