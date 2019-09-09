const updateImageDescription = gql`
    mutation updateImageTitle($id: Int!, $description: String!) {
        updateImageTitle(id: $id, description: $description) {
            id
            description
            title
            image
        }
    }
`;

export default updateImageDescription;