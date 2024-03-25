import { Stack } from 'expo-router';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://odawara.stepzen.net/api/nihilist-quail/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      'apikey odawara::stepzen.io+1000::0a1a7d7cc6f93a686d66d6580e5f4eba72241c23859f28deb4d30c47e8acee86'
  },
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
};

export default RootLayout;