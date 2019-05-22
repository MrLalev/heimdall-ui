import { Action } from '@ngrx/store';
import { UserModel, CreateUserModel } from '../models/user.model';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export class CreateUserAction implements Action {
    readonly type = CREATE_USER;
    constructor(public payload: CreateUserModel) {}
}

export class CreateUserSuccessAction implements Action {
    readonly type = CREATE_USER_SUCCESS;
    constructor(public payload: string) {}
}

export class CreateUserErrorAction implements Action {
    readonly type = CREATE_USER_ERROR;
    constructor(public payload: string) {}
}

export type Actions = CreateUserSuccessAction | CreateUserErrorAction | CreateUserAction;
