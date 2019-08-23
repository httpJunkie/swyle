import React, {Component} from 'react';
import articles from './queries/articles';
import { Query } from "react-apollo";
import ArticleTags from './article_tags';

class ArticlesIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {    
        return (
            <Query query={articles}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return ( 
                    <div className="article-index-page"> 
                      {  data.articles.map((article) => (
                            <div className="article-index-card" key={article.id}>
                              <h2 className="article-index-title">{article.title}</h2>
                              <h3 className="article-index-subtitle">by {article.author.username}</h3>
                              <p className="article-index-snippet">{article.snippet}<span className="article-index-show-link">{"...more"}</span></p>
                                
                                <ArticleTags tags={["butt", "ass"] } />
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