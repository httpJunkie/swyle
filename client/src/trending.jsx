import React, {Component} from 'react';

class Trending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shutUpLint: true
        }
    }

    render() {
        return (  <div>
            This particular component will use a graphql query finding articles sorted by most likes or whatever.
        </div>)
    }
}

export default Trending;