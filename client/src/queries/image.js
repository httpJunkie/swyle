import gql from "graphql-tag";

const image = gql`
    query image($id: Int!){
        image(id: $id){
            title
            description
            image
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

export default (image);