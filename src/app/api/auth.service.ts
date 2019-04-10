import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { BehaviorSubject } from 'rxjs';
import { AuthTokenData } from './models/auth-tokens.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) { }

  private static authTokens = new BehaviorSubject<AuthTokenData>(new AuthTokenData('', ''));

  static getAuthTokenData() {
    return this.authTokens.value;
  }

  static subscribeAuthTokenData() {
    return this.authTokens.asObservable();
  }

  static setAuthTokenData(tokens: AuthTokenData) {
    this.authTokens.next(tokens);
  }

  authorize(email, password) {
    this.apollo.mutate({
      mutation: gql`
        mutation {
          authorize(input: {email: "${email}", password: "${password}"}) {
            token,
            refreshToken
          }
        }
      `,
    })
    .subscribe((result: any) => {
      const data = result.data.authorize;
      AuthService.setAuthTokenData(new AuthTokenData(data.token, data.refreshToken));
    });
  }
}
