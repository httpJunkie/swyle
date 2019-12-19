import gql from 'graphql-tag';

const updateUserColorScheme = gql`
    mutation updateUserColorScheme($id: Int!, $title: String!) {
        updateUserColorScheme(id: $id, title: $title) {
            id
            email
            username
            colorScheme
        }
    }
`;

export default updateUserColorScheme;