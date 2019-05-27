import { createAction, props, union } from '@ngrx/store';
import { UserModel } from '../models/user.model';
import { AuthUserModel } from '../models/auth.model';

const AUTH_USER = 'AUTH_USER';
const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
const AUTH_USER_ERROR = 'AUTH_USER_ERROR';

export const authUserAction = createAction(AUTH_USER, props<{ payload: AuthUserModel }>());
export const authUserSuccessAction = createAction(AUTH_USER_SUCCESS, props<{ payload: UserModel }>());
export const authUserErrorAction = createAction(AUTH_USER_ERROR, props<{ payload: string }>());

const actions = union({
    authUserAction,
    authUserSuccessAction,
    authUserErrorAction,
});

export type AuthActionsType = typeof actions;
