import './App.css';
import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo"
import {ApolloClient}  from 'apollo-client';
import ArticlesIndex from './articles_index';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:3000/graphql'
})

const client = new ApolloClient({
  cache,
  link
})

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/" component={ArticlesIndex} />
          </Switch>
        </ApolloProvider>
      </BrowserRouter>

    );
  }
}


export default App;
