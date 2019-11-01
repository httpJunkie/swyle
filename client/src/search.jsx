import React from 'react'
import { withApollo, Query } from 'react-apollo'
import search from './queries/posts_by_query';
import {Link} from 'react-router-dom';

const Search = (props) =>  {
        const query = props.location.search;
        const parseUrl = (string) => {
            switch (string) {
                case "Image":
                    return '/images';
                case "Article":
                    return '/articles';
            }
        }
       return (           <div>
           <Query query={search} variables={{ searchQuery: query }}>
                {({ loading, error, data }) => {
               if (loading) return <p>Loading...</p>;
               if (error) return <p>Error :(</p>;
               if (data.postsByQuery.length === 0) {
                   return <h1 style={{"color":"white", "margin":"2rem"}}>Sorry, no posts matched your query</h1>
               }
               return (
                   <div>
                       {data.postsByQuery.map(post => {
                           const url = parseUrl(post.__typename)
                           return (
                               <div className="user-posts-card" key={`${post.title}${post.title.length}${post.id}`}>
                                   <h3 ><Link>{post.title}</Link></h3>
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