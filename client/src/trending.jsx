/* eslint no-restricted-globals: 0 */  // --> OFF
import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import query from './queries/posts_by_popularity';

class Trending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shutUpLint: true,
            activePane: "likes"
        }
        this.selectPane = this.selectPane.bind(this)
    }

    selectPane(event) {
        event.preventDefault();
        event.stopPropagation();
        let selection = event.target.getAttribute('name')
        this.setState({activePane: selection})
    }

    sortPosts(attribute) {
       const posts = this.props.data.postsByPopularity.sort((b, a) => {
           
           let valA = a[attribute];
           let valB = b[attribute];
           return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;
       });
    }

    render() {
        if (this.props.data.loading) {
            return <div>
                Insert spinny thingy here.
            </div>
        }
        const posts = this.sortPosts(this.state.activePane);
        return (  
        <div className="trending-posts-page">
            <h1 className="trending-posts-title">Most Popular Posts</h1>
            <div className="trending-posts-nav">
                <div className={`trending-posts-tab${this.state.activePane === 'likes' ? '-active' : '-inactive'}`} 
                name="likes"
                onClick={this.selectPane}
                >
                    By Likes
                </div>
                    <div className={`trending-posts-tab${this.state.activePane === 'comments' ? '-active' : '-inactive'}`} 
                    name="comments"
                    onClick={this.selectPane}
                    >
                    By Comments
                </div>
            </div>
            <div className="trending-posts-backpane">
                <div className="trending-posts-content">

                </div>
            </div>

        </div>
        )
    }
}

export default graphql(query)(Trending);