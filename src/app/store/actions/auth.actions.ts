import { Action } from '@ngrx/store';
import { UserModel } from '../models/user.model';
import { AuthUserModel } from '../models/auth.model';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';

export class AuthUserAction implements Action {
    readonly type = AUTH_USER;
    constructor(public payload: AuthUserModel) {}
}

export class AuthUserSuccessAction implements Action {
    readonly type = AUTH_USER_SUCCESS;
    constructor(public payload: { user: UserModel }) {}
}

export class AuthUserErrorAction implements Action {
    readonly type = AUTH_USER_ERROR;
    constructor(public payload: string) {}
}

export type Actions = AuthUserSuccessAction | AuthUserErrorAction | AuthUserAction;
