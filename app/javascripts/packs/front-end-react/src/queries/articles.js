import gql from 'graphql-tag';

const articles = gql`{
    articles{
        title
        snippet
        author {
            id
            username
        }
    }
}`

export default articles;