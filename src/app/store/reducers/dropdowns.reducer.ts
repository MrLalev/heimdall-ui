import { DropdownsStoreModel } from '../models/sore.model';
import * as DropdownActions from '../actions/dropdowns.actions';
import * as ExerciseActions from '../actions/exercise.actions';

const initialState: DropdownsStoreModel = {
    muscleGroups: {
        loading: false,
        groups: [],
        error: null,
    },
    exercisesGroups: {
        loading: false,
        exercises: [],
        error: null,
    }
};

// tslint:disable-next-line:max-line-length
export function dropdownsReducer(state: DropdownsStoreModel = initialState, action: DropdownActions.DropdownActionsType | ExerciseActions.ExerciseActionsType) {
    switch (action.type) {
        case DropdownActions.getMuscleGroupsAction.type:
            return { ...state, muscleGroups: { ...state.muscleGroups, loading: true, error: null, groups: []} };
        case DropdownActions.getMuscleGroupsSuccessAction.type:
            return { ...state, muscleGroups: { ...state.muscleGroups, loading: false, error: null, groups: action.payload} };
        case DropdownActions.getMuscleGroupsErrorAction.type:
            return { ...state, muscleGroups: { ...state.muscleGroups, loading: false, error: action.payload, groups: []} };
        case ExerciseActions.getAvailableExercisesAction.type:
            return { ...state, exercisesGroups: { ...state.exercisesGroups, loading: true, error: null, exercises: []} };
        case ExerciseActions.getAvailableExercisesSuccessAction.type:
            return { ...state, exercisesGroups: { ...state.exercisesGroups, loading: false, error: null, exercises: action.payload} };
        case ExerciseActions.getAvailableExercisesErrorAction.type:
            return { ...state, exercisesGroups: { ...state.exercisesGroups, loading: false, error: action.payload, exercises: []} };
        default:
            return state;
    }
}
