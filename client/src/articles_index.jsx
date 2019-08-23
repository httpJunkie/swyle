import React, {Component} from 'react';
import articles from './queries/articles';
import { Query } from "react-apollo";

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
                    return data.articles.map((article) => (
                        <div key={article.id}>
                            <h2>{article.title}- by {article.author.username}</h2>
                            <p>{article.snippet}</p>
                        </div>
                    ))
                }}
            </Query>
        );
    }
}

export default ArticlesIndex;