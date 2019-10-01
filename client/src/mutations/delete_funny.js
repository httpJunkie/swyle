import gql from 'graphql-tag'

const deleteFunny = gql`
mutation deleteFunny($postType: String!, $userId: Int!, $postId: Int!) { 
        deleteFunny(postType: $postType, userId: $userId, postId: $postId) {
            id
    }  
}
`;

export default deleteFunny;