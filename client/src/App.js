/**
 * TODO: Split this into different modules
 */
import './App.css';
import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo"
import {ApolloClient}  from 'apollo-client';
import { onError } from 'apollo-link-error';
import ArticlesIndex from './articles_index';
import Header from './header';
import Login from './login';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, Observable } from 'apollo-link';
import {Query} from 'react-apollo';
import currentUser from './queries/current_user';

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


const history = createHashHistory();
const cache = new InMemoryCache();

// const link = new HttpLink({
//   uri: 'http://localhost:3000/graphql',
//   credentials: 'include'
// })

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

const client = new ApolloClient({
  cache,
  link
})



const testArea = () => {
  return <div />
}

class App extends Component {
  render() {   
    return (
      <BrowserRouter history={history}>
        <ApolloProvider client={client}>
          <Query query={currentUser}> 
            {({data, loading })=> {
            const anass = "yourmom";
            if (loading) return <p/>
            console.log(data)
            return (
            <div>
              <Header currentUser={data.currentUser}/>
               <Switch>
                  <Route exact path="/" component={ArticlesIndex} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/headertest" component={testArea}/>
              </Switch>
          </div> 
            )
        }}
          
          </Query>
       
        </ApolloProvider>
      </BrowserRouter>

    )
   
  }
}


export default App;
