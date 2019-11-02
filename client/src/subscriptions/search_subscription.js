import gql from 'graphql-tag';

const SearchSubscription = gql`
subscription SearchSubscription {
    imageAdded {
        id
        title
        image
   },
    articleAdded {
        id
        title
        snippet
   },
}
`

export default SearchSubscription;