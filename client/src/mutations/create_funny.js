import gql from 'graphql-tag'

const createFunny = gql`
mutation createFunny($postType: String!, $userId: Int!, $postId: Int!) { 
        createFunny(postType: $postType, userId: $userId, postId: $postId) {
            id
            laugher{
                id
                username
            }
    }  
}
`;

export default createFunny;