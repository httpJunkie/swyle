import gql from 'graphql-tag';

const postsByPopularity = gql`
{
    postsByPopularity {
    __typename
    ... on Article {
      id
      title
      snippet
      count
      likeCount
    }
    ... on Image {
      id
      title
      image	
      count
      likeCount
    }
}
}
`

export default postsByPopularity;