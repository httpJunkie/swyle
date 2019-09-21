import gql from 'graphql-tag';

const ArticleSubscription = gql`
subscription ArticleSubscription {
   articleAdded {
    id
    title
    snippet
    count
    created
    likeCount
    author {
        id
        username
    }
   },

    articleLiked {
    id
    title
    snippet
    count
    created
    likeCount
    author {
        id
        username
    }
   }

}`

export default ArticleSubscription;