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
    }
      
}`

export default ArticleSubscription;