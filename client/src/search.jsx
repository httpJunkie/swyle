import React, { Component } from 'react'
import { withApollo } from 'react-apollo'

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
           <h1>Expletive</h1>
        </div>
       ) 
    }

}

export default Search;