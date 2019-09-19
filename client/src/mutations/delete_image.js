import gql from 'graphql-tag'

const deleteImage = gql`
mutation deleteImage($id: Int!)
 { deleteImage(id: $id) {
  id
}
  
}`

export default deleteImage;