import './App.css';
import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo"
import {ApolloClient}  from 'apollo-client';
import ArticlesIndex from './articles_index';
import Header from './header';
import Login from './login';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const history = createHashHistory();
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:3000/graphql'
})

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
          <Header />
          <Switch>
            <Route exact path="/" component={ArticlesIndex} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/headertest" component={testArea}/>
          </Switch>
        </ApolloProvider>
      </BrowserRouter>

    );
  }
}


export default App;
