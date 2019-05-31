import { createAction, props, union } from '@ngrx/store';
import { CreateUserModel, FetchUsersModel, UserModel } from '../models/user.model';

const CREATE_USER = 'CREATE_USER';
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

const FETCH_USERS = 'FETCH_USERS';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const createUserAction = createAction(CREATE_USER, props<{ payload: CreateUserModel }>());
export const createUserSuccessAction = createAction(CREATE_USER_SUCCESS, props<{ payload: string }>());
export const createUserErrorAction = createAction(CREATE_USER_ERROR, props<{ payload: string }>());

export const fetchUsersAction = createAction(FETCH_USERS, props<{ payload: FetchUsersModel }>());
export const fetchUsersSuccessAction = createAction(FETCH_USERS_SUCCESS, props<{ payload: Array<UserModel> }>());
export const fetchUsersErrorAction = createAction(FETCH_USERS_ERROR, props<{ payload: string }>());

const actions = union({
    createUserAction,
    createUserSuccessAction,
    createUserErrorAction,
    fetchUsersAction,
    fetchUsersSuccessAction,
    fetchUsersErrorAction,
});

export type UserActionsType = typeof actions;

