import gql from 'graphql-tag';

const search = gql`
postsByQuery($searchQuery: String!){
    postsByQuery(searchQuery: $searchQuery) {
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
`;

export default search;