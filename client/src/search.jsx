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
                   <div>
                       {data.postsByQuery.map(post => {
                           return (
                               <div className="user-posts-card" key={`${post.title}${post.id}`}>
                                   <h3 >{post.title}</h3>
                                   {post.image && <div className="user-posts-thumbnail-container"><img src={post.image} /> </div>}
                                   {post.snippet && <p>{post.snippet}<span style={{ "color": "gray" }}>...</span></p>}
                               </div>
                           )
                       })}
                   </div>
               )}}
           </Query>
        </div>
       ) 
}

export default Search;