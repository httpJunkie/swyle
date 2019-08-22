import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo"
import { client } from "./apollo"
import Index from './src/components/index';
import Route from 'react-router';

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                    <Index />
            </ApolloProvider>
        );
    }
}



document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.body.appendChild(document.createElement('div')),
    )
})