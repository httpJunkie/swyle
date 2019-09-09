import React, { Component } from 'react';
import postArticle from './mutations/post_article';
import currentUser from './queries/current_user';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';


class ArticleCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ""
        }
        this.handleFormChange = this.handleFormChange.bind(this)
        this.save = this.save.bind(this)
    }


    handleFormChange(field) {
        return event => this.setState({
            [field]: event.currentTarget.value,
        });
    }

    async save(e) {
        e.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title,
                body: this.state.body,
            }
        }).then(res => {
            this.props.history.push(`/articles/${res.data.createArticle.id}`)
        })
    }

    render() {
        return (
            <div className="article-create-page">
                <form className="article-create-form"onSubmit={this.save}>
                    <input className="image-text-field" type="text" onChange={this.handleFormChange("title")} placeholder="Article Title" value={this.state.title} />
                    <textarea className="image-text-field" type="text" onChange={this.handleFormChange("body")} placeholder="Write your article here" value={this.state.description} />
                    <input type="submit" className="submit" value="Post Image" disabled={!this.state.body} />
                </form>
            </div>
        )
    }
}



export default compose(
    graphql(currentUser)
)(
    graphql(postArticle)(ArticleCreate)
)