import React, {Component} from 'react';
import {Query} from 'react-apollo';
import article from './queries/article';
import CommentSection from './comment_section';
import ArticleBodyEdit from './article_body_edit';
import ArticleTitleEdit from './article_title_edit';

class ArticleShow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editingBody: false,
            editingTitle: false
        }
        this.cancelEdit = this.cancelEdit.bind(this)
    }

    cancelEdit(field) {
        this.setState({ [`editing${field}`]: false })
    }

    render() {
       const argument = parseInt(this.props.match.params.articleID)
        return (
            <Query query={article} variables={{ id: argument}}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                        const article = data.article;
                    return (
                        <div className="article-show-page">
                            <div className="article-section">
                                 {!this.state.editingTitle ? <h1>{article.title}</h1> : <ArticleTitleEdit cancelEdit={this.cancelEdit} />}
                                 <h3>by {article.author.username}</h3>
                                {!this.state.editingBody ? <p>{article.body}</p> : <ArticleBodyEdit cancelEdit={this.cancelEdit}/> }
                            </div>
                                      
                              <CommentSection type={"Article"} currentUser={data.currentUser} postId={argument} articleAuthorId={article.author.id} />
                        </div>
                    )
                }}
            </Query>
        )
    }

}

export default ArticleShow;