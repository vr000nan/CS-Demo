import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, useMutation } from '@apollo/client';
import { CREATE_USER } from './graphql/Mutation';
import './App.css';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className='createUser'>
        <input
          type="text"
          placeholder='Name'
        />
        <input
          type="text"
          placeholder='Username'
        />
        <input
          type="password"
          placeholder='Password'
        />
        <input
          type="number"
          placeholder='Years in Practice'
        />
        <input
          type="text"
          placeholder='Influence'
        />
        <button >Create User</button>
      </div>
    </ApolloProvider>
  );
}

export default App;
