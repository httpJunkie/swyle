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

}

export default Search;