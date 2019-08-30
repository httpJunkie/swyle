import gql from 'graphql-tag'

const postComment = gql`
mutation postComment($body: String!, $userId: Integer!, $postId: Integer!, $postType: String!){
  postComment(
    body: $body, 
    userId: $userId, 
    postId: $postId, 
    postType: $postType
  ) {
    commentor {
      username
    }
    createdAt
    body
  }
}
`

export default postComment;