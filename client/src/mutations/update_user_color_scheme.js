import gql from 'graphql-tag';

const updateUserColorScheme = gql`
    mutation updateUserColorScheme($id: Int!, $colorScheme: String!) {
        updateUserColorScheme(id: $id, colorScheme: $colorScheme) {
            id
            email
            username
            colorScheme
        }
    }
`;

export default updateUserColorScheme;