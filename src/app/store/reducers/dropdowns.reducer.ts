import { DropdownsStoreModel } from '../models/sore.model';
import * as DropdownActions from '../actions/dropdowns.actions';

const initialState: DropdownsStoreModel = {
    muscleGroups: {
        loading: false,
        groups: [],
        error: null,
    }
};

export function dropdownsReducer(state: DropdownsStoreModel = initialState, action: DropdownActions.DropdownActionsType) {
    switch (action.type) {
        case DropdownActions.getMuscleGroupsAction.type:
            return { ...state, muscleGroups: { ...state.muscleGroups, loading: true, error: null, groups: []} };
        case DropdownActions.getMuscleGroupsSuccessAction.type:
            return { ...state, muscleGroups: { ...state.muscleGroups, loading: false, error: null, groups: action.payload} };
        case DropdownActions.getMuscleGroupsErrorAction.type:
            return { ...state, muscleGroups: { ...state.muscleGroups, loading: false, error: action.payload, groups: []} };
        default:
            return state;
    }
}
