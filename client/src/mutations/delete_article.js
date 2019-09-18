import gql from 'graphql-tag'

const deleteArticle = gql`
mutation deleteArticle($id: Int!)
 { deleteArticle(id: $id) {
  id
}
  
}`

export default deleteArticle;