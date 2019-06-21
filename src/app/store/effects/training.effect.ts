import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as TrainingActions from '../actions/training.actions';
import { switchMap, map, catchError, } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { TrainingService } from '../../services/training.service';

@Injectable()
export class TrainingEffects {
    constructor(private trainingService: TrainingService, private actions$: Actions, private store: Store<AppState>) {}

    @Effect()
    createTraining$ = this.actions$.pipe(
        ofType(TrainingActions.createTrainingAction.type),
        switchMap((action: any) => {
            return this.trainingService.createTraining(action.payload).pipe(
                map((result: any) => {
                    return TrainingActions.createTrainingSuccessAction({ payload: result.data.createTraining });
                }),
                catchError((error: any) => {
                    return of(TrainingActions.createTrainingErrorAction({payload: error.graphQLErrors[0].message }));
                })
            );
        })
    );
}
