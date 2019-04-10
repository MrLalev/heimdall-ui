import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  getAllUsers() {
    this.apollo.watchQuery({
      query: gql`
        query allUsers {
          getAllUsers {
            id,
            email,
            first_name,
            last_name
          }
        }
      `,
    })
    .valueChanges.subscribe((result: ApolloQueryResult<any> ) => {
      console.log(result);
    });
  }
}
