import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6dvkr0spi01xie34obllq/master',
  cache: new InMemoryCache(),
});
