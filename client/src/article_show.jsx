import React, {Component} from 'react';
import {Query} from 'react-apollo';
import article from './queries/article';

class ArticleShow extends Component {

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
                            <h1>{article.title}</h1>
                            <p>{article.body}</p>
                            {
                                article.comments.length > 0 ?
                                <div>
                                    {article.comments.map(
                                        comment =>{
                                            return <div key={comment.body}>
                                                <p>{comment.body}</p>
                                                <h3> {`${comment.commentor.username}, on ${comment.createdAt}`}</h3>
                                            </div>
                                        }
                                    )}
                                </div>
                                :
                                <h4>Nobody has commented on this yet.</h4>
                            }
                        </div>
                    )
                }}
            </Query>
        )
    }

}

export default ArticleShow;