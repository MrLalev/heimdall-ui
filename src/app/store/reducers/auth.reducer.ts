import { Action } from '@ngrx/store';
import { AuthStoreModel } from '../models/auth.model';
import * as AuthActions from '../actions/auth.actions';

const initialState: AuthStoreModel = {
    user: null,
    error: null,
};

export function authReducer(state: AuthStoreModel = initialState, action: AuthActions.Actions) {
    switch (action.type) {
        case AuthActions.SET_AUTH_DATA:
            return { ...state, ...action.payload, error: null };
        case AuthActions.SET_AUTH_ERROR:
            return { ...state, error: action.payload, user: null };
        default:
            return state;
    }
}
