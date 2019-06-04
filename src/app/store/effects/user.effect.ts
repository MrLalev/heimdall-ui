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
        ofType(UserActions.createUserAction.type),
        switchMap((action: any) => {
            return this.userService.createUser(action.payload).pipe(
                map(result => {
                    const { first_name, last_name, email } = result.data.createUser;
                    return UserActions.createUserSuccessAction({ payload: `${first_name} ${last_name} was successfully registered` });
                }),
                catchError((error: any) => {
                    return of(UserActions.createUserErrorAction({ payload: error.graphQLErrors[0].message }));
                })
            );
        })
    );

    @Effect()
    fetch_users$ = this.actions$.pipe(
        ofType(UserActions.fetchUsersAction.type),
        switchMap((action: any) => {
            const { page, perPage, where} = action.payload;
            return this.userService.fetchUsers(page, perPage, where).pipe(
                map((result: any) => {
                    return UserActions.fetchUsersSuccessAction({ payload: result.data.getUsers });
                }),
                catchError((error: any) => {
                    return of(UserActions.fetchUsersErrorAction({ payload: error.graphQLErrors[0].message }));
                })
            );
        })
    );

    @Effect()
    search_users$ = this.actions$.pipe(
        ofType(UserActions.searchUsersAction.type),
        switchMap((action: any) => {
            const { page, perPage, where} = action.payload;
            return this.userService.fetchUsers(page, perPage, where).pipe(
                map((result: any) => {
                    return UserActions.refetchUsersSuccessAction({ payload: result.data.getUsers });
                }),
                catchError((error: any) => {
                    return of(UserActions.refetchUsersErrorAction({ payload: error.graphQLErrors[0].message }));
                })
            );
        })
    );

    @Effect()
    refresh_users$ = this.actions$.pipe(
        ofType(UserActions.refetchUsersAction.type),
        switchMap((action: any) => {
            const { page, perPage, where} = action.payload;
            return this.userService.refreshUsers(page, perPage, where).pipe(
                map((result: any) => {
                    return UserActions.refetchUsersSuccessAction({ payload: result.data.refreshUsers });
                }),
                catchError((error: any) => {
                    return of(UserActions.refetchUsersErrorAction({ payload: error.graphQLErrors[0].message }));
                })
            );
        })
    );
}
