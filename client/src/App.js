/**
 * TODO: Split this into different modules
 */
import './stylesheets/App.scss';
import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo"
import ArticlesIndex from './articles_index';
import ImagesIndex from './images_index';
import ImageCreate from './image_create';
import ImageShow from './image_show';
import ArticleShow from './article_show';
import ArticleCreate from './article_create';
import Header from './header';
import UserDash from './user_dash'
import Login from './login';
import Register from './register';
import Search from './search';
import Trending from './trending';
import About from './about';
import Adverts from './adverts';
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
            {({data, loading, client})=> {
            if (loading) return <p/>
            const colorScheme = data.currentUser ? data.currentUser.colorScheme : "standard"
            return (
            <div>
              <Header currentUser={data.currentUser} client={client} colorScheme={colorScheme} />
               <Switch>
                  <Route exact path="/" render={(props) => <ArticlesIndex colorScheme={colorScheme} {...props}/> } />
                  <Route exact path={"/articles/new"} render={(props) => <ArticleCreate colorScheme={colorScheme} {...props} />}/>
                  <Route exact path={"/articles/:articleID"} render={(props) => <ArticleShow colorScheme={colorScheme} currentUser={data.currentUser} {...props}/>} />

                  <Route exact path="/images/new" render={(props) => <ImageCreate colorScheme={colorScheme} {...props}/>} />
                  <Route exact path={"/images/:imageID"} render={(props) => <ImageShow colorScheme={colorScheme} {...props}/>} />
                  <Route exact path="/images" render={(props) => <ImagesIndex colorScheme={colorScheme} {...props}/>} />

                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />

                  <Route exact path="/dashboard" render={(props) => <UserDash currentUser={data.currentUser} colorScheme={colorScheme} {...props}/>} />

                  <Route exact path="/trending" render={(props) => <Trending colorScheme={colorScheme} {...props}/>} />
                  <Route exact path="/headertest" component={testArea}/>
                  <Route exact path="/about" render={(props) => <About colorScheme={colorScheme} {...props}/>} />
                  <Route path="/search" component={Search} />
                  <Route exact path="/sponsors" component={Adverts} />
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
