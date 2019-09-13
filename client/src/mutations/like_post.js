import gql from 'graphql-tag'

const likePost = gql`
mutation likePost($postType: String!, $userId: Int!, $postId: Int!) { 
        likePost(postType: $postType, userId: $userId, postId: $postId) {
            id
            liker{
                id
                username
            }
    }  
}
`;

export default likePost;