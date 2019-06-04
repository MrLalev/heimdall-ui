import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { CreateUserModel } from '../store/models/user.model';
import { parseSearchFilter } from '../utils/helpers';
import { SEARCH_FIELDS } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apollo: Apollo) { }

  fetchUsers(page, perPage, where) {
    return this.apollo.watchQuery({
      query: gql`
        query fetchUsers($where: JSONObject!, $restrict: JSONObject!) {
          getUsers(where: $where, restrict: $restrict) {
            _id,
            first_name,
            last_name,
            email,
            followers_count,
            following_count,
            personal_data {
              country
            }
          }
        }
      `,
      variables: {
        where: parseSearchFilter(where, SEARCH_FIELDS.USERS),
        restrict: { limit: perPage, skip: perPage * page },
      }
    }).valueChanges;
  }

  createUser(user: CreateUserModel) {
    return this.apollo.mutate({
      mutation: gql`
        mutation createUser($input: UserInputType!) {
            createUser(input: $input) {
              first_name,
              last_name,
              email,
              created_at
          }
        }
      `,
      variables: {
        input: {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password
        }
      }
    });
  }
}
