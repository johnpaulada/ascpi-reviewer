import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import AscpiApp from './AscpiApp';

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://api:4000'}),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AscpiApp />
      </ApolloProvider>
    );
  }
}

export default App;
