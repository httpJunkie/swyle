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

