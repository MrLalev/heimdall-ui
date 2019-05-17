import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { BehaviorSubject } from 'rxjs';
import { AuthModel } from '../store/models/auth.model';
import { AppState } from '../app.state';
import * as AuthActions from '../store/actions/auth.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo, private store: Store<AppState>) {
  }

  private static authTokens = new BehaviorSubject<AuthModel>({token: null, refreshToken: null});

  static getAuthTokenData() {
    return this.authTokens.value;
  }

  static setAuthTokenData(tokens: AuthModel) {
    this.authTokens.next(tokens);
  }

  authorize(email, password) {
    this.apollo.mutate({
      mutation: gql`
        mutation {
          authorize(input: {email: "${email}", password: "${password}"}) {
            token,
            refreshToken,
            user {
              _id,
              first_name,
              last_name
            }
          }
        }
      `,
    })
    .subscribe(
      (result: any) => {
        const data = result.data.authorize;
        AuthService.setAuthTokenData({token: data.token, refreshToken: data.refreshToken});
        this.store.dispatch(new AuthActions.SetAuthData({ user: result.data.authorize.user }));
      },
      (mutationError: any) => {
        this.store.dispatch(new AuthActions.SetAuthError(mutationError.graphQLErrors[0].message));
      },
    );
  }
}
