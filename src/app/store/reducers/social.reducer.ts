import { Action } from '@ngrx/store';
import { SocialStoreModel } from '../models/sore.model';
import * as UserActions from '../actions/user.actions';

const initialState: SocialStoreModel = {
    loading: false,
    users: [],
    error: null,
    page: null,
    perPage: null,
    where: null,
};

export function socialReducer(state: SocialStoreModel = initialState, action: UserActions.UserActionsType) {
    switch (action.type) {
        case UserActions.fetchUsersAction.type:
            return { ...state, ...action.payload, loading: true, error: null };
        case UserActions.fetchUsersSuccessAction.type:
            return { ...state, users: [ ...state.users, ...action.payload ], loading: false};
        case UserActions.fetchUsersErrorAction.type:
            return { ...state, users: [], error: action.payload, loading: false};
        case UserActions.refetchUsersAction.type:
            return { ...state, ...action.payload, loading: true, error: null, users: [] };
        case UserActions.refetchUsersSuccessAction.type:
            return { ...state, users: action.payload, loading: false};
        case UserActions.refetchUsersErrorAction.type:
            return { ...state, users: [], error: action.payload, loading: false};
        default:
            return state;
    }
}
