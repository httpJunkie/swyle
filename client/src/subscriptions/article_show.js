import gql from 'graphql-tag';

const ArticleSubscription = gql`
subscription ArticleSubscription {
    
    articleLiked {
            id
            title
            body
            likers
            likeCount
            author {
                id
                username
            }
            currentUser {
                id
                username
            }
   },

    articleUnliked {
             id
            title
            body
            likers
            likeCount
            author {
                id
                username
            }
            currentUser {
                id
                username
            }
   }, 

    articleUpdated {
            id
            title
            body
            likers
            likeCount
            author {
                id
                username
            }
                 currentUser {
                id
                username
            }
    }
      
}`

export default ArticleSubscription;