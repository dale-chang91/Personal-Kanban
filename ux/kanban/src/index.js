import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-http-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: "http://localhost:3001/",
  link: new HttpLink(),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
