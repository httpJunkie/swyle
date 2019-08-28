/**
 * TODO: Split this into different modules
 */
import './App.css';
import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo"
import ArticlesIndex from './articles_index';
import Header from './header';
import Login from './login';
import Trending from './trending';
import About from './about';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { createHashHistory } from 'history';
import {Query} from 'react-apollo';
import currentUser from './queries/current_user';
import { createCache, createClient } from './utils/apollo';


const history = createHashHistory();

const client = createClient(createCache());

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
            if (loading) return <p/>
            return (
            <div>
              <Header currentUser={data.currentUser}/>
               <Switch>
                  <Route exact path="/" component={ArticlesIndex} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/trending" component={Trending} />
                  <Route exact path="/headertest" component={testArea}/>
                  <Route exact path="/about" component={About} />
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
