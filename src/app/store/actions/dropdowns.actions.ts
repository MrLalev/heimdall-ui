import { createAction, props, union } from '@ngrx/store';

const GET_MUSCLE_GROUPS = 'GET_MUSCLE_GROUPS';
const GET_MUSCLE_GROUPS_SUCCESS = 'GET_MUSCLE_GROUPS_SUCCESS';
const GET_MUSCLE_GROUPS_ERROR = 'GET_MUSCLE_GROUPS_ERROR';

export const getMuscleGroupsAction = createAction(GET_MUSCLE_GROUPS);
export const getMuscleGroupsSuccessAction = createAction(GET_MUSCLE_GROUPS_SUCCESS, props<{ payload: Array<string> }>());
export const getMuscleGroupsErrorAction = createAction(GET_MUSCLE_GROUPS_ERROR, props<{ payload: string }>());

const actions = union({
    getMuscleGroupsAction,
    getMuscleGroupsSuccessAction,
    getMuscleGroupsErrorAction,
});

export type DropdownActionsType = typeof actions;
