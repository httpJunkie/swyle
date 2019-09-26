import gql from 'graphql-tag';

const postsByPopularity = gql`
{
    postsByPopularity {
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

export default postsByPopularity;