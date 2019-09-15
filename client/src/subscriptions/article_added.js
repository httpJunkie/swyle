import gql from 'graphql-tag';

const ArticleSubscription = gql`
subscription ArticleSubscription {
  articleAdded {
     
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
    
}
`

export default ArticleSubscription;