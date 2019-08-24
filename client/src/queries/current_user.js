import gql from 'graphql-tag';

const currentUser = gql`{
    currentUser {
    id
    username
    }
}`
export default currentUser