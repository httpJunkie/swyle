import gql from 'graphql-tag';

const articleAdded = gql`
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
`

export default articleAdded;