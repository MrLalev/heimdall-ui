import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { parseSearchFilter } from 'src/app/utils/helpers';
import { getStateSnapshot } from '../store/selectors/base-selector';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { FROM_STORE } from 'src/app/utils/constants';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ExerciseAutocomplateService implements AutoCompleteService {
    labelAttribute = 'name';
    formValueAttribute?: any;

    getResults(term: any) {
        const created_by = getStateSnapshot(this.store, FROM_STORE.AUTH_DATA).user._id;
        return this.getFilteredExercises(term, created_by).pipe(
            map((result: any) => {
                return result.data.getExercises;
            })
        );
    }

    constructor(private apollo: Apollo, private store: Store<AppState>) { }

    getFilteredExercises(filter, user_id) {
        const where = {};

        if (filter) {
            where['$or'] = [
                {
                    '$and': [{
                        'private': false
                    },
                    {
                        'name': { '$regex': `^${filter}`, '$options': 'i' }
                    }
                    ]
                },
                {
                    '$and': [{
                        'created_by': user_id
                    },
                    {
                        'name': { '$regex': `^${filter}`, '$options': 'i' }
                    }
                    ]
                }];
        } else {
            where['$or'] = [{
                'private': false
            },
            {
                'created_by': user_id
            }];
        }

        return this.apollo.watchQuery({
            query: gql`
        query getExercises($where: JSONObject!) {
          getExercises(where: $where) {
            _id,
            name,
            muscle_group,
          }
        }
      `,
            variables: {
                where,
            },
        }).valueChanges;
    }
}
