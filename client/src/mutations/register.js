import gql from 'graphql-tag'

const register = gql`mutation createUser($email: String!, $username: String!, $password: String!) {
    createUser(
        username: $username,
        authProvider: {
            email: {
                email: $email,
                password: $password
            }
        }
    ) {
       user{
         id
        email
        username  
       } 
       token
       errors
    }
    
}`

export default register;