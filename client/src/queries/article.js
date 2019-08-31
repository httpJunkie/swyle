import gql from "graphql-tag";

const article = gql`
    query article($id: Int!){
        article(id: $id){
            title
            body
            author {
                username
            }
    },
      currentUser {
        id
      }
}
`

export default(article);