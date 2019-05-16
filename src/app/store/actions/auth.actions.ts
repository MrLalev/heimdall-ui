import { Action } from '@ngrx/store';
import { AuthModel } from '../models/auth.model';

export const SET_AUTH_DATA = '[AUTH] SET';

export class SetAuthData implements Action {
    readonly type = SET_AUTH_DATA;

    constructor(public payload: AuthModel) {}
}

export type Actions = SetAuthData;
