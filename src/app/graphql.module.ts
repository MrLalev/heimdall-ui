import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-boost';

const uri = 'http://localhost:8080/graphql';

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

  console.log('here');

  return forward(operation);
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const context = operation.getContext();
    const { response: { headers } } = context;

    console.log(context);
    // if (headers) {
    //   const token = headers.get("x-refresh-token");

    //   if (token) {
    //     localStorage.setItem("token", token);
    //   }

    // }
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
