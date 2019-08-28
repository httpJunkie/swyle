`mutation {
    signInUser(email: {
        email: "fiery@swagger.com",
        password: "butter"
    }) {
        user{
            id
        }
        token
    }
}`

`
mutation {
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
}
`