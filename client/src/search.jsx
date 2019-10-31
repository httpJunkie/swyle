import React from 'react'
import { withApollo, Query } from 'react-apollo'
import search from './queries/posts_by_query';

const Search = (props) =>  {
        const query = props.location.search;
        console.log(props.location.search)
       return (           <div>
           <Query query={search} variables={{ searchQuery: query }}>
                {({ loading, error, data }) => {
               if (loading) return <p>Loading...</p>;
               if (error) return <p>Error :(</p>;

               return (
                   <h1>expletive</h1>
               )}}
           </Query>
        </div>
       ) 
}

export default Search;