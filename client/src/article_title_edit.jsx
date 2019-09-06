import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import updateArticleTitle from './mutations/update_article_title'

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