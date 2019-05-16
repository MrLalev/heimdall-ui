import { Action } from '@ngrx/store';
import { AuthModel } from '../models/auth.model';
import * as AuthActions from '../actions/auth.actions';

const initialState: AuthModel = {
    token: null,
    refreshToken: null
};

export function authReducer(state: AuthModel = initialState, action: AuthActions.Actions) {
    switch (action.type) {
        case AuthActions.SET_AUTH_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
