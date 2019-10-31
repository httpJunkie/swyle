import React, { Component } from 'react'
import { withApollo, Query } from 'react-apollo'
import search from './queries/posts_by_query';

class Search extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            filters: '',
            posts: []
        }
    }

    render() {
        console.log(this.props.location.search)
       return (           <div>
           <Query>

           </Query>
        </div>
       ) 
    }

}

export default Search;