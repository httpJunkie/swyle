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
        this.cancelEdit = this.cancelEdit.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
    }

    cancelEdit(event) {
        $('body').css('overflow', 'auto');
        this.setState({ [`editing${event.target.name}`]: false })
    }

    finishEdit(field) {
        $('body').css('overflow', 'auto');
        this.setState({ [`editing${field}`]: false })
    }

    editField(event) {
        this.setState({ [`editing${event.target.name}`]: true });
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
                                {!this.state.editingTitle ? 
                                 <h1>{
                                   article.title}{article.author.id === data.currentUser.id && 
                                     <span className="comment-edit-btn" onClick={this.editField} name="Title"/>
                                   }
                                 </h1> 
                                   : 
                                <ArticleTitleEdit cancelEdit={this.cancelEdit} />}
                                 <h3>by {article.author.username}</h3>
                                {!this.state.editingBody ? 
                                  <p>
                                    {article.body} 
                                    {article.author.id === data.currentUser.id && <span className="comment-edit-btn" onClick={this.editField} name="body" />}
                                  </p> 
                                   : 
                                  <ArticleBodyEdit cancelEdit={this.cancelEdit} finishEdit={this.finishEdit}/> }
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