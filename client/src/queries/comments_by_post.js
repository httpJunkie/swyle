import gql from "graphql-tag"

const comments = gql`
query commentsByPost($postId: Int!, $postType: String!){
  commentsByPost(postId: $postId, postType: $postType) {
    commentor {
      username
      id
    }
    body
    createdAt
  }
}
`

export default comments;