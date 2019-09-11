import gql from "graphql-tag"

const comments = gql`
query commentsByUser($userId: Int!){
  commentsByUser(userId: $userId) {
    body
    id
    createdAt
  }
}
`

export default comments;