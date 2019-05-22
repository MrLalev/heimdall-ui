import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { CreateUserModel } from '../store/models/user.model';

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

  createUser(user: CreateUserModel) {
    return this.apollo.mutate({
      mutation: gql`
        mutation createUser {
            createUser(input: {
              first_name: "${user.first_name}",
              last_name: "${user.last_name}",
              email: "${user.email}",
              password: "${user.password}"
            }) {
              first_name,
              last_name,
              email,
              created_at
          }
        }
      `,
    });
  }
}
