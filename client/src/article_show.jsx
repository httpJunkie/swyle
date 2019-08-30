import React, {Component} from 'react';
import {Query} from 'react-apollo';
import article from './queries/article';

class ArticleShow extends Component {

    render() {
        console.log(this.props.data)
        return (
            <Query query={article}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                        debugger;
                    return (
                        <div className="article-show-page">
                            <h1></h1>
                        </div>
                    )
                }}
            </Query>
        )
    }

}

export default ArticleShow;