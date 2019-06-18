import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as DropdownActions from '../actions/dropdowns.actions';
import { switchMap, map, catchError, } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { DropdownsService } from 'src/app/services/dropdowns.service';

@Injectable()
export class DropdownsEffects {
    constructor(private dropdownsService: DropdownsService, private actions$: Actions, private store: Store<AppState>) {}

    @Effect()
    authorize$ = this.actions$.pipe(
        ofType(DropdownActions.getMuscleGroupsAction.type),
        switchMap((action: any) => {
            return this.dropdownsService.getMuscleGroups().pipe(
                map(result => {
                    return DropdownActions.getMuscleGroupsSuccessAction({ payload: result.data.getMuscleGroupList.values });
                }),
                catchError((error: any) => {
                    return of(DropdownActions.getMuscleGroupsErrorAction({payload: error.graphQLErrors[0].message }));
                })
            );
        })
    );
}
