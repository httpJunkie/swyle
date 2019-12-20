/* eslint no-restricted-globals: 0 */  // --> OFF
import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import query from './queries/posts_by_popularity';
import { parseUrl} from './helpers';
import {Link} from 'react-router-dom';

/**
 * The trending page allows users to sort posts by Likes and by number of Comments. No insane analytics, just the goods fair and plain.
 * The single responsibility of this component is "display a sorted list of posts based on user choices"
 */
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

    /**
     * Sorts posts based on a specific attribute such as comment count or number of likes.
     * Yes, it does it on the front end, and I'm not sorry.
     * @param {string} attribute 
     */
    sortPosts(attribute) {
       const posts = this.props.data.postsByPopularity.sort((b, a) => {
           let valA = a[attribute];
           let valB = b[attribute];
           return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;
       });
       return posts;
    }

    render() {
        if (this.props.data.loading) {
            return <div className={`loading-div loading-div-${this.props.colorScheme}`}><img className="loading-img" alt="load" src="https://i.gifer.com/origin/4d/4dc11d17f5292fd463a60aa2bbb41f6a_w200.gif" /></div>;
        }
        const attribute = this.state.activePane === 'comments' ? 'count' : 'likeCount'
        const posts = this.sortPosts(attribute);
        
        return (  
            <div className={`trending-posts-page trending-posts-page-${this.props.colorScheme}`}>
            <h1 className="trending-posts-title">Most Popular Posts</h1>
          
            <div className="trending-posts-backpane">
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
                <div className="trending-posts-content">
                {
                        posts.map(
                            post => {
                                const url = parseUrl(post.__typename)
                                return (
                                    <div className="user-posts-card" key={`${post.title}${post.id}`}>
                                        <h3 ><Link to={`${url}/${post.id}`}>{post.title}</Link></h3>
                                        {post.image && <div className="user-posts-thumbnail-container"><img src={post.image} alt={post.image.title} /> </div>}
                                        {post.snippet && <p>{post.snippet}<span style={{ "color": "gray" }}>...</span></p>}
                                        <h4>{post.count} Comments {post.likeCount} Likes</h4>
                                    </div>
                                )
                            }
                        )
                }
                </div>
            </div>

        </div>
        )
    }
}

export default graphql(query)(Trending);