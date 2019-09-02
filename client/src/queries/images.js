import gql from 'graphql-tag';

const images = gql`{
    images{
        id
        title
        image
        count
        created
        author {
            id
            username
        }
    }
}`

export default images;