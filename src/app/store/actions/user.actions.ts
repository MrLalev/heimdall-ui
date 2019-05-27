import { createAction, props, union } from '@ngrx/store';
import { UserModel, CreateUserModel } from '../models/user.model';

const CREATE_USER = 'CREATE_USER';
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export const createUserAction = createAction(CREATE_USER, props<{ payload: CreateUserModel }>());
export const createUserSuccessAction = createAction(CREATE_USER_SUCCESS, props<{ payload: string }>());
export const createUserErrorAction = createAction(CREATE_USER_ERROR, props<{ payload: string }>());


const actions = union({
    createUserAction,
    createUserSuccessAction,
    createUserErrorAction,
});

export type UserActionsType = typeof actions;

