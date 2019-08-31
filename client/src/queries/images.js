import gql from 'graphql-tag';

const images = gql`{
    images{
        id
        title
        image
        count
        author {
            id
            username
        }
    }
}`

export default images;