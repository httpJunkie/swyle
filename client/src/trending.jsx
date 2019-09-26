import React, {Component} from 'react';

class Trending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shutUpLint: true,
            activePane: "likes"
        }
        this.selectPane = this.selectPane.bind(this)
    }

    selectPane(e) {
        e.preventDefault();
        this.setState({activePane: e.target.name})
    }

    render() {
        return (  
        <div className="trending-posts-page">
            <h1 className="trending-posts-title">Most Popular Posts</h1>
            <div className="trending-posts-nav">
                <div className={`trending-posts-tab${this.state.activePane === 'likes' ? '-active' : '-inactive'}`} name="likes">
                    By Likes
                </div>
                    <div className={`trending-posts-tab${this.state.activePane === 'comments' ? '-active' : '-inactive'}`} name="comments">
                    By Comments
                </div>
            </div>
            This particular component will use a graphql query finding articles sorted by most likes or whatever.
        </div>
        )
    }
}

export default Trending;