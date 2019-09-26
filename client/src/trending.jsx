import React, {Component} from 'react';

class Trending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shutUpLint: true
        }
    }

    render() {
        return (  
        <div className="trending-posts-page">
            <h1 className="trending-posts-title">Most Popular Posts</h1>
            This particular component will use a graphql query finding articles sorted by most likes or whatever.
        </div>
        )
    }
}

export default Trending;