import { Action } from '@ngrx/store';

// TODO: RENAME ACTIONS
export const SEND_AUTH_DATA = '[AUTH] SEND';
export const SET_AUTH_DATA = '[AUTH] SET';
export const SET_AUTH_ERROR = '[AUTH] ERROR';

export class SendAuthData implements Action {
    readonly type = SEND_AUTH_DATA;

    constructor(public payload: { email: string, password: string }) {}
}

export class SetAuthData implements Action {
    readonly type = SET_AUTH_DATA;

    // TODO: ADD USER TYPE
    constructor(public payload: { user: any }) {}
}

export class SetAuthError implements Action {
    readonly type = SET_AUTH_ERROR;

    constructor(public payload: string) {}
}

export type Actions = SetAuthData | SetAuthError | SendAuthData;
