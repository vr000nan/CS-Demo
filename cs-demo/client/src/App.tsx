import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, useMutation } from '@apollo/client';
import { CREATE_USER } from "./graphql/Mutation";
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [yearsInPractice, setYearsInPractice] = useState(0);
  const [influence, setInfluence] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);

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
          onChange={(e) => {
            setName(e.target.value);
            console.log("NAME: ", name); 
          }}
        />
        <input
          type="text"
          placeholder='Username'
          onChange={(e) => {
            setUsername(e.target.value);
            console.log("USERNAME: ", username); 
          }}
        />
        <input
          type="password"
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
            console.log("PASSWORD: ", password); 
          }}
        />
        <input
          type="number"
          placeholder='Years in Practice'
          onChange={(e) => {
            setYearsInPractice(Number(e.target.value));  
            console.log("YEARS IN PRACTICE: ", yearsInPractice);  
          }}
        />
        <input
          type="text"
          placeholder='Influence'
          onChange={(e) => {
            setInfluence(e.target.value);
            console.log("INFLUENCE: ", influence);  
          }}
        />
        <button onClick={() => {
          createUser(
            {
              variables: {
                name: name,
                username: username,
                password: password,
                yearsInPractice: yearsInPractice,
                influence: influence
            }
            }
          )
        }}>Create User</button>
      </div>
    </ApolloProvider>
  );
}

export default App;
