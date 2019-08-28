import gql from 'graphql-tag'

const register = gql`mutation {
    createUser(
        username:,
        authProvider: {
            email: {
                email: ,
                password:
            }
        }
    ) {
        id
        email
        username
    }
}`

export default register;