import gql from "graphql-tag"

const comments = gql`
query commentsByUser($userId: Int!){
    commentsByUser(userId: $userId) {
    body
    id
    post{
      __typename
      ... on Article {
        title
          author {
          username
        }
      }
      ... on Image {
        title
        author {
          username
        }
      }
    }
  }
}
`

export default comments;