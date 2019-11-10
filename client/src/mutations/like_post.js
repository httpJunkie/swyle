/**
 * Mutation to be called when a user clicks the thumbs up icon in the Reactions tab.
 * Expected Arguments
 *      postType: string, determines which table the post belongs to (in this case articles or image_posts).
 *      postId:  integer, it's an ID number for a post (Article or ImagePost). Will be come a foreign key on the new Like
 *      userId:  integer, it's an ID number for a User.
 */

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