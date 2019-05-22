import { Action } from '@ngrx/store';
import { AuthUserStoreModel } from '../models/auth.model';
import * as AuthActions from '../actions/auth.actions';
import * as UserActions from '../actions/user.actions';

const initialState: AuthUserStoreModel = {
    loading: false,
    user: null,
    message: null,
    error: null,
};

export function userReducer(state: AuthUserStoreModel = initialState, action: AuthActions.Actions | UserActions.Actions) {
    switch (action.type) {
        case AuthActions.AUTH_USER:
            return { ...state, loading: true, message: null, error: null };
        case AuthActions.AUTH_USER_SUCCESS:
            return { ...state, ...action.payload, message: null, loading: false, error: null };
        case AuthActions.AUTH_USER_ERROR:
            return { ...state, message: null, error: action.payload, user: null, loading: false };
        case UserActions.CREATE_USER:
            return { ...state, message: null, loading: true, error: null };
        case UserActions.CREATE_USER_SUCCESS:
            return { ...state, message: action.payload, loading: false, error: null};
        case UserActions.CREATE_USER_ERROR:
            return { ...state, message: null, error: action.payload, loading: false};
        default:
            return state;
    }
}
