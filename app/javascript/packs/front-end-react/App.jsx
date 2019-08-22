import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo"
import { client } from "./apollo"
import Index from './src/components/index';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <Switch>
                        <Route exact path="/" component={Index} />
                    </Switch>
                </ApolloProvider>
            </BrowserRouter>

        );
    }
}



document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.body.appendChild(document.createElement('div')),
    )
})