import { useCallback } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import type { GraphQLError } from 'graphql';

import { useAuth } from 'src/auth/context-ui';
import { route } from 'src/Routes';

import { config } from '../config';

const UNAUTHENTICATED_CODE = 'UNAUTHENTICATED';

const hasUnauthenticatedErrorCode = (errors?: ReadonlyArray<GraphQLError>) => {
  return (
    errors &&
    errors.some((error) => error.extensions?.code === UNAUTHENTICATED_CODE)
  );
};

const hasNetworkStatusCode = (error: any | undefined, code: number) => {
  return error && error?.statusCode === code;
};

const httpLink = createHttpLink({
  uri: config.GRAPHQL_API,
});

export type EnhancedApolloProviderProps = {
  children: ReactNode;
};

export function EnhancedApolloProvider({
  children,
}: EnhancedApolloProviderProps) {
  const navigate = useNavigate();
  const { token, signout } = useAuth();

  const handleSignOut = useCallback(() => {
    signout();
    navigate(route.signIn());
    window.location.reload();
  }, [signout, navigate]);

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });

    return forward(operation);
  });

  const logoutLink = onError(({ graphQLErrors, networkError }) => {
    if (
      hasUnauthenticatedErrorCode(graphQLErrors) ||
      hasNetworkStatusCode(networkError, 401)
    ) {
      handleSignOut();
    }
  });

  const client = new ApolloClient({
    connectToDevTools: process.env.NODE_ENV === 'development',
    link: from([logoutLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
      query: {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-first',
      },
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
