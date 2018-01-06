import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import AscpiApp from './AscpiApp';

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://api.graph.cool/simple/v1/cjc2syhyo0vfg01306qasuooe'}),
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
