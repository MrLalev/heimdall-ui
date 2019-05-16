import { Action } from '@ngrx/store';
import { AuthModel } from '../models/auth.model';

export const SET_AUTH_DATA = '[AUTH] SET';
export const SET_AUTH_ERROR = '[AUTH] ERROR';

export class SetAuthData implements Action {
    readonly type = SET_AUTH_DATA;

    constructor(public payload: AuthModel) {}
}

export class SetAuthError implements Action {
    readonly type = SET_AUTH_ERROR;

    constructor(public payload: string) {}
}

export type Actions = SetAuthData | SetAuthError;
