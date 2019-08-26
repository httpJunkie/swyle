import gql from 'graphql-tag';

const currentUser = gql`{
    currentUser {
    id
    email
    username
    }
}`

export default currentUser