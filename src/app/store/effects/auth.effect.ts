import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import * as AuthActions from '../actions/auth.actions';
import { switchMap, map, catchError, } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {
    constructor(private authService: AuthService, private actions$: Actions, private store: Store<AppState>) {}

    @Effect()
    authorize$ = this.actions$.pipe(
        ofType(AuthActions.authUserAction.type),
        switchMap((action: any) => {
            return this.authService.authorize(action.payload.email, action.payload.password).pipe(
                map(result => {
                    AuthService.setAuthTokenData({token: result.token, refreshToken: result.refreshToken});
                    return AuthActions.authUserSuccessAction({ payload: result.data.authorize.user });
                }),
                catchError((error: any) => {
                    return of(AuthActions.authUserErrorAction({payload: error.graphQLErrors[0].message }));
                })
            );
        })
    );
}