import gql from "graphql-tag";

const article = `
article($id: Int!){
    article(id: $id){
    title
    body
    author {
      username
    }
    comments{
      body
      createdAt
      commentor {
        username
      }
    }
  }
}`

export default(article);