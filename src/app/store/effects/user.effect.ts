import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import * as UserActions from '../actions/user.actions';
import { switchMap, map, catchError, } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class UserEffects {
    constructor(private userService: UserService, private actions$: Actions, private store: Store<AppState>) {}

    @Effect()
    create_user$ = this.actions$.pipe(
        ofType(UserActions.CREATE_USER),
        switchMap((action: any) => {
            return this.userService.createUser(action.payload).pipe(
                map(result => {
                    const { first_name, last_name, email } = result.data.createUser;
                    return new UserActions.CreateUserSuccessAction(`${first_name} ${last_name} was successfully registered`);
                }),
                catchError((error: any) => {
                    return of(new UserActions.CreateUserErrorAction(error.graphQLErrors[0].message));
                })
            );
        })
    );
}
