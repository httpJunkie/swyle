import gql from 'graphql-tag';

const updateArticleTitle = gql`
    mutation updateArticleBody($id: Int!, $title: String!) {
        updateArticleBody(id: $id, title: $title) {
            id
            body
            title
        }
    }
`;

export default UpdateArticleTitle;