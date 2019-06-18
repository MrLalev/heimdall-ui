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
export class DropdownsService {

  constructor(private apollo: Apollo) { }

  getMuscleGroups() {
    return this.apollo.watchQuery({
      query: gql`
      query getMuscleGroupList {
        getMuscleGroupList {
          values
        }
      }
      `,
    }).valueChanges;
  }
}
