import { HttpLink } from 'apollo-link-http';
import { ApolloLink, Observable } from 'apollo-link';

const getTokens = () => {
    const tokens = {
        "X-CSRF-Token": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content")
    };
    const authToken = localStorage.getItem("mlToken");
    debugger;
    return authToken ? { ...tokens, Authorization: authToken } : tokens;
};


const setTokenForOperation = async operation => {
    return operation.setContext({
        headers: {
            ...getTokens()
        }
    });
};

const createLinkWithToken = () =>
    new ApolloLink(
        (operation, forward) =>
            new Observable(observer => {
                let handle;
                Promise.resolve(operation)
                    .then(setTokenForOperation)
                    .then(() => {
                        handle = forward(operation).subscribe({
                            next: observer.next.bind(observer),
                            error: observer.error.bind(observer),
                            complete: observer.complete.bind(observer),
                        });
                    })
                    .catch(observer.error.bind(observer));
                return () => {
                    if (handle) handle.unsubscribe();
                };
            })
    );


const createHttpLink = () => new HttpLink({
    uri: '/graphql',
    credentials: 'include',
})



const logError = (error) => console.error(error);
const createErrorLink = () => onError(({ graphQLErrors, networkError, operation }) => {
    if (graphQLErrors) {
        logError('GraphQL - Error', {
            errors: graphQLErrors,
            operationName: operation.operationName,
            variables: operation.variables,
        });
    }
    if (networkError) {
        logError('GraphQL - NetworkError', networkError);
    }
})


const link = ApolloLink.from([
    createErrorLink(),
    createLinkWithToken(),
    createHttpLink(),
])
