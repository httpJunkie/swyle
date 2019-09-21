import gql from 'graphql-tag';

const CommentSubscription = gql`
subscription CommentSubscription {
   commentAdded {
    commentor {
      username
      id
    }
    body
    id
    createdAt
   },

    commentUpdated {
      commentor {
      username
      id
    }
    body
    id
    createdAt
   },
   commentDeleted {
       commentor {
      username
      id
    }
    body
    id
    createdAt
   }
}`

export default CommentSubscription;