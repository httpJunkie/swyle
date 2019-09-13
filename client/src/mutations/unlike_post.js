import gql from 'graphql-tag'

const unlikePost = gql`
mutation unlike($postType: String!, $userId: Int!, $postId: Int!) { 
        unlike(postType: $postType, userId: $userId, postId: $postId) {
            id
    }  
}
`;

export default unlikePost;