import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import {AutoCompleteService} from 'ionic4-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class ExerciseAutocomplateService implements AutoCompleteService {
    labelAttribute = 'full_name';
    formValueAttribute?: any;

    arr = [
        {
            first_name: 'Dominic',
            last_name: 'Elliot',
            full_name: 'Dominic Elliot',
        },
        {
            first_name: 'Duke',
            last_name: 'Ellington',
            full_name: 'Duke Ellington',
        },
        {
            first_name: 'Jeremy',
            last_name: 'Quick',
            full_name: 'Jeremy Quick',
        },
        {
            first_name: 'Matt',
            last_name: 'Smith',
            full_name: 'Matthew Drake',
        },
        {
            first_name: 'Matthew',
            last_name: 'Drake',
            full_name: 'Matthew Drake',
        },
        {
            first_name: 'Yu',
            last_name: 'Lee',
            full_name: 'Yu Lee',
        },
        {
            first_name: 'Zach',
            last_name: 'Smith',
            full_name: 'Zach Smith',
        }
    ];

    getResults(term: any) {
        term = term.toLowerCase();

        return this.arr.filter(
          (object) => {
             const value = object[this.labelAttribute].toLowerCase();
             return value.includes(term);
          }
        );
    }

    // getItemLabel?(item: any) {
    //     throw new Error("Method not implemented.");
    // }

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
