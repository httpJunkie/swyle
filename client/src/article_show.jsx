import React, {Component} from 'react';
import {Query} from 'react-apollo';
import article from './queries/article';
import articles from './queries/articles';
import deleteArticle from './mutations/delete_article';
import CommentSection from './comment_section';
import ArticleBodyEdit from './article_body_edit';
import ArticleTitleEdit from './article_title_edit';
import LikesSection from './likes_section';
import $ from 'jquery';

class ArticleShow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editingBody: false,
            editingTitle: false
        }
        this.cancelEdit = this.cancelEdit.bind(this);
        this.finishEdit = this.finishEdit.bind(this);
        this.editField = this.editField.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
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
        event.preventDefault();
        this.setState({ [`editing${event.target.id}`]: true });
    }

    deleteArticle(e) {
        e.preventDefault();
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
                                {data.currentUser && (article.author.id === data.currentUser.id) && 
                                 <span onClick={this.deleteArticle}>DeleteMe</span>}

                                {!this.state.editingTitle ? 
                                 <h1 className="article-show-title">
                                 
                                    {article.title}

                                     { data.currentUser && (article.author.id === data.currentUser.id) && 
                                      <span className="comment-edit-btn" onClick={this.editField} name="Title" id="Title"/>
                                     }
                                 </h1> 
                                   : 
                                    <ArticleTitleEdit cancelEdit={this.cancelEdit} 
                                    finishEdit={this.finishEdit}  id={article.id} title={article.title}/>
                                    }
                                 <h3>by {article.author.username}</h3>
                                {!this.state.editingBody ? 
                                  <p className="article-show-body" id="article-body">
                                        {data.currentUser && (article.author.id === data.currentUser.id) && 
                                        <span className="comment-edit-btn" onClick={this.editField} 
                                        name="Body" id="Body" />}
                                    {article.body} 
                                  </p> 
                                   : 
                                  <ArticleBodyEdit cancelEdit={this.cancelEdit} finishEdit={this.finishEdit} id={article.id} body={article.body}/> }
                                  <LikesSection type={"Article"} currentUser={data.currentUser} postId={argument} likers={data.article.likers} numLikes={data.article.likeCount} />          
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