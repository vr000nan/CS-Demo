import { ApolloProvider, ApolloClient, InMemoryCache, useMutation } from '@apollo/client';
import './App.css';
import CreateUser from './components/CreateUser';
import ListOfUsers from './components/ListOfUsers';
import UpdatePassword from './components/UpdatePassword';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ListOfUsers />
      <CreateUser />
      <UpdatePassword />
    </ApolloProvider>
  );
}

export default App;
