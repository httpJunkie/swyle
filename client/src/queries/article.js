/**
 * Queries for a single Article, expects an ID as an argument
 */

import gql from "graphql-tag";

const article = gql`
    query article($id: Int!){
        article(id: $id){
            id
            title
            body
            author {
                id
                username
            }
            reactions
            comments {
              id
              body
              createdAt
              commentor {
                id
                username
              }
            }
    }
}
`

export default(article);