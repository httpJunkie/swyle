import gql from 'graphql-tag';
import CommentSubscription from '../comment_subscription';

const CommentSubscription = gql`
subscription CommentSubscription {
   commentAdded {
    commentquery stuff
   },

    commentUpdated {
      commentquery stuff
   },
   commentDeleted {
       commentquery stuff
   }
}`

export default CommentSubscription;