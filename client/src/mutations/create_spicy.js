import gql from "graphql-tag";

const createSpicy = gql`
  mutation createSpicy($postType: String!, $userId: Int!, $postId: Int!) {
    createSpicy(postType: $postType, userId: $userId, postId: $postId) {
      id
      user {
        id
        username
      }
    }
  }
`;

export default createSpicy;
