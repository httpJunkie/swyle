import gql from "graphql-tag"

const comments = gql`
query commentsByPost($postId: Int!, $postType: String!){
  commentsByPost(postId: $postId, postType: $postType) {
    commentor {
      username
      id
    }
    body
    id
    createdAt
  }
}
`

export default comments;