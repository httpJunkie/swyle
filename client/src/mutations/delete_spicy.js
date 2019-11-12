import gql from "graphql-tag";

const deleteSpicy = gql`
  mutation deleteSpicy($postType: String!, $userId: Int!, $postId: Int!) {
    deleteSpicy(postType: $postType, userId: $userId, postId: $postId) {
      id
    }
  }
`;

export default deleteSpicy;
