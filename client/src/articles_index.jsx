import React, {Component} from 'react';
import articles from './queries/articles';
import { Query } from "react-apollo";
import {Link} from 'react-router-dom';
import ArticleTags from './article_tags';
import ArticleSubscription from './subscriptions/article_added';

class ArticlesIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    subscribeToNewArticles(subscribeToMore) {
        subscribeToMore({
            document: ArticleSubscription,
            updateQuery: (prev, { subscriptionData }) => {
                debugger
                if (!subscriptionData.data) return prev
                debugger;
                const newArticle = subscriptionData.data.articleAdded
                const exists = prev.feed.articles.find(({ id }) => id === newArticle.id);
                if (exists) return prev;
                debugger;
                return Object.assign({}, prev, {
                    data: {
                        articles: [newArticle, ...prev.data.articles],
                    }
                })
            }
        })
    }

    render() {
        const date = Date.now(); 
         
        return (
            <Query query={articles}>
                {({ loading, error, data, subscribeToMore }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    this.subscribeToNewArticles(subscribeToMore)
                    debugger;
                    const articles = data.articles;
                    return ( 
                    <div className="article-index-page"> 
                      <h1>Newest Articles</h1> 
                      {  articles.map((article) => (
                            <div className="article-index-card" key={`${article.id}${article.title}${date}`}>
                              <h2 className="article-index-title">{article.title}</h2>
                              <h3 className="article-index-subtitle">by {article.author.username}</h3>
                              <p className="article-index-snippet">{article.snippet}<Link className="article-index-show-link" to={`/articles/${article.id}`}>{"...more"}</Link></p>
                                <ArticleTags tags={["lookAtThisTag", "othertag"] } />
                                <h4>{article.count} Comments {article.likeCount} Likes</h4>                           
                            </div>
                        ))}
                    </div>
                    )
                }}
            </Query>
        );
    }
}

export default ArticlesIndex;