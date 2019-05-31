import { createAction, props, union } from '@ngrx/store';
import { UserModel } from '../models/user.model';
import { AuthUserModel } from '../models/auth.model';

const AUTH_USER = 'AUTH_USER';
const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
const AUTH_USER_ERROR = 'AUTH_USER_ERROR';

const LOG_OUT_USER = 'LOG_OUT_USER';
const LOG_OUT_USER_SUCCESS = 'LOG_OUT_USER_SUCCESS';

export const authUserAction = createAction(AUTH_USER, props<{ payload: AuthUserModel }>());
export const authUserSuccessAction = createAction(AUTH_USER_SUCCESS, props<{ payload: UserModel }>());
export const authUserErrorAction = createAction(AUTH_USER_ERROR, props<{ payload: string }>());

export const logOutUserAction = createAction(LOG_OUT_USER);
export const logOutUserActionSuccess = createAction(LOG_OUT_USER_SUCCESS);

const actions = union({
    authUserAction,
    authUserSuccessAction,
    authUserErrorAction,
    logOutUserAction,
    logOutUserActionSuccess
});

export type AuthActionsType = typeof actions;
