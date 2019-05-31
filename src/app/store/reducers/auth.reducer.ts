import { Action } from '@ngrx/store';
import { AuthUserStoreModel } from '../models/sore.model';
import * as AuthActions from '../actions/auth.actions';
import * as UserActions from '../actions/user.actions';

const initialState: AuthUserStoreModel = {
    loading: false,
    user: null,
    message: null,
    error: null,
};

export function authReducer(state: AuthUserStoreModel = initialState, action: AuthActions.AuthActionsType | UserActions.UserActionsType) {
    switch (action.type) {
        case AuthActions.authUserAction.type:
            return { ...state, loading: true, message: null, error: null };
        case AuthActions.authUserSuccessAction.type:
            return { ...state, user: action.payload, message: null, loading: false, error: null };
        case AuthActions.authUserErrorAction.type:
            return { ...state, message: null, error: action.payload, user: null, loading: false };
        case UserActions.createUserAction.type:
            return { ...state, message: null, loading: true, error: null };
        case UserActions.createUserSuccessAction.type:
            return { ...state, message: action.payload, loading: false, error: null};
        case UserActions.createUserErrorAction.type:
            return { ...state, message: null, error: action.payload, loading: false};
        case AuthActions.logOutUserActionSuccess.type:
            return { ...state, user: null };
        default:
            return state;
    }
}
