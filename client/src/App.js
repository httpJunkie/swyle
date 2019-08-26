/**
 * TODO: Split this into different modules
 */
import './App.css';
import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo"
import ArticlesIndex from './articles_index';
import Header from './header';
import Login from './login';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import {Query} from 'react-apollo';
import currentUser from './queries/current_user';
import { createCache, createClient } from './utils/apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, Observable } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';


const history = createHashHistory();
// const cache = new InMemoryCache();

// const link = new HttpLink({
//   uri: 'http://localhost:3000/graphql',
//   credentials: 'include'
// })

// const client = new ApolloClient({
//   cache,
//   link
// })





const testArea = () => {
  return <div />
}

class App extends Component {
  render() {   
    return (
      <BrowserRouter history={history}>
        <ApolloProvider client={createClient(createCache())}>
          <Query query={currentUser}> 
            {({data, loading })=> {
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
