import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-boost';
import {AuthService} from './services/auth.service';

const uri = 'http://localhost:3001/graphql';

const authLink = new ApolloLink((operation, forward) => {
  const authData = AuthService.getAuthTokenData();
  operation.setContext({
    headers: {
      'x-token': authData.token ? authData.token : '',
      'x-refresh-token': authData.refreshToken ? authData.refreshToken : '',
    }
  });

  return forward(operation);
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const context = operation.getContext();
    const { response: { headers } } = context;

    if (headers) {
      const authData = AuthService.getAuthTokenData();
      const token = headers.get('x-token');
      const refreshToken = headers.get('x-refresh-token');

      if (token && refreshToken && authData.token !== token) {
        AuthService.setAuthTokenData({ token, refreshToken});
      }

    }
    return response;
  });
});

export function createApollo(httpLink: HttpLink) {
  return {
    link: authLink.concat(afterwareLink.concat(httpLink.create({uri}))),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
