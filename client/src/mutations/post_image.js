import gql from 'graphql-tag'

const postImage = gql`
  mutation createImagePost($image: String!, $title: String!, $description: String) {
    createImagePost(image: $image, description: $description, title: $title) {
      title
      description
      image
      author {
        id
        username
      }
    }
  }
`;

export default postImage;