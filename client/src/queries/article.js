import gql from "graphql-tag";

const article = gql`
    query article($id: Int!){
        article(id: $id){
            title
            body
            author {
                username
            }
            comments{
                body
                createdAt
                commentor {
                    username
                }
        }
    },
      currentUser {
        id
      }
}
`

export default(article);