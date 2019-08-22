import React, {Component} from 'react';
import articles from '../queries/articles';
import graphql from 'react-apollo';

class Index extends Component {
    render = (props) => {
        console.log(this.props)
        if (this.props.data.loading) {
            return <h1>Loading</h1>
        }
        return (
            <div>
                {this.props.data.articles.map( article => {
                    return (
                    <div>
                        <span>article.title</span>
                        <span>article.snippet</span>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default graphql(articles)(Index)