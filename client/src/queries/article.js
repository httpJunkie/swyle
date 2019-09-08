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
    },
      currentUser {
        id
      }
}
`

export default(article);