import gql from "graphql-tag";

const deleteSmart = gql`
  mutation deleteSmart($postType: String!, $userId: Int!, $postId: Int!) {
    deleteSmart(postType: $postType, userId: $userId, postId: $postId) {
      id
    }
  }
`;

export default deleteSmart;
