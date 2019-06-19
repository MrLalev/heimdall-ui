import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ExerciseActions from '../actions/exercise.actions';
import { switchMap, map, catchError, } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { ExerciseService } from '../../services/exercise.service';

@Injectable()
export class ExerciseEffects {
    constructor(private exerciseService: ExerciseService, private actions$: Actions, private store: Store<AppState>) {}

    @Effect()
    createExercise$ = this.actions$.pipe(
        ofType(ExerciseActions.createExerciseAction.type),
        switchMap((action: any) => {
            return this.exerciseService.createExercise(action.payload).pipe(
                map((result: any) => {
                    return ExerciseActions.createExerciseSuccessAction({ payload: result.data.createExercise });
                }),
                catchError((error: any) => {
                    return of(ExerciseActions.createExerciseErrorAction({payload: error.graphQLErrors[0].message }));
                })
            );
        })
    );
}
