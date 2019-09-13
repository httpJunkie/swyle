import gql from 'graphql-tag'

const likePost = gql`
mutation likePost(postType: String!, userId: Int!, postId: Int!) 
    { 
        likePost(postType: $postType, userId: $userId, postId: $postId) {
            id
            userId
            postId
    }  
}
`;

export default likePost;