import gql from 'graphql-tag';

const ImageSubscription = gql`
subscription ImageSubscription {
   imageAdded {
     id
        title
        image
        count
        likeCount
        created
        author {
            id
            username
        }
   }
}`

export default ImageSubscription;