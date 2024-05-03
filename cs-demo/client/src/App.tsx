import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, useMutation } from '@apollo/client';
import { CREATE_USER } from "./graphql/Mutation";
import './App.css';
import CreateUser from './components/CreateUser';
import ListOfUsers from './components/ListOfUsers';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <CreateUser />
      <ListOfUsers />
    </ApolloProvider>
  );
}

export default App;
