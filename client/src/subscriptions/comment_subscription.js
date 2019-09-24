import gql from 'graphql-tag';
import mutation from '../mutations/delete_comment';

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