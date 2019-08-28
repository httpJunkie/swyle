import gql from 'graphql-tag';

const logout = gql`
mutation {
  logout {
    id
    username
  }
}`

export default logout;