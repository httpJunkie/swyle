import gql from 'graphql-tag';

const postsByUser = gql`
query postsByUser($userId: Int!){
    postsByUser(userId:$userId) {
    __typename
    ... on Article {
      id
      title
      snippet
    }
    ... on Image {
      id
      title
      image	
    }
  }
}
`

export default postsByUser;