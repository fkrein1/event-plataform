import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocvfkl1x1z01xibwtl90om/master',
	cache: new InMemoryCache(),
});
