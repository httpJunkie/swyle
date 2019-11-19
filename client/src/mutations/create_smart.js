import gql from "graphql-tag";

const createSmart = gql`
  mutation createSmart($postType: String!, $userId: Int!, $postId: Int!) {
    createSmart(postType: $postType, userId: $userId, postId: $postId) {
      id
      user {
        id
        username
      }
    }
  }
`;

export default createSmart;