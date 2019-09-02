import gql from 'graphql-tag'

const updateComment = gql`
mutation updateComment($id: Int!, $body: String!){
  updateComment(id: $id, body:$body) {
    body
    id
  }
}
`

export default updateComment;