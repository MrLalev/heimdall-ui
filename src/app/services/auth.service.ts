import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { BehaviorSubject } from 'rxjs';
import { AuthModel } from '../store/models/auth.model';
import { AppState } from '../app.state';
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
    return this.apollo.mutate({
      mutation: gql`
        mutation authorize($input: AuthInputType!){
          authorize(input: $input) {
            token,
            refreshToken,
            user {
              _id,
              first_name,
              last_name,
              personal_data {
                weight,
                gender,
                height,
                birthday,
                country,
                description,
                metric_type
              },
              email
            }
          }
        }
      `,
      variables: {
        input: {
          email: email,
          password: password
        }
      }
    });
  }
}
