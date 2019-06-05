import { ProfileStoreModel } from '../models/sore.model';
import * as UserActions from '../actions/user.actions';

const initialState: ProfileStoreModel = {
    loading: false,
    user: null,
    error: null,
};

export function profileReducer(state: ProfileStoreModel = initialState, action: UserActions.UserActionsType) {
    switch (action.type) {
        case UserActions.fetchUserProfileAction.type:
            return { ...state, user: null, loading: true, error: null };
        case UserActions.fetchUserProfileSuccessAction.type:
            return { ...state, user: action.payload, loading: false};
        case UserActions.fetchUserProfileErrorAction.type:
            return { ...state, user: null, error: action.payload, loading: false};
        default:
            return state;
    }
}
