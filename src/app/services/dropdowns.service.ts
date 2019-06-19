import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

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
