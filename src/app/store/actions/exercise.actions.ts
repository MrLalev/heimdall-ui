import { createAction, props, union } from '@ngrx/store';
import { ExerciseModel, CreateExerciseModel } from '../models/exercise.model';

const CREATE_EXERCISE_ACTION = 'CREATE_EXERCISE_ACTION';
const CREATE_EXERCISE_ACTION_SUCCESS = 'CREATE_EXERCISE_ACTION_SUCCESS';
const CREATE_EXERCISE_ACTION_ERROR = 'CREATE_EXERCISE_ACTION_ERROR';

export const createExerciseAction = createAction(CREATE_EXERCISE_ACTION, props<{ payload: CreateExerciseModel }>());
export const createExerciseSuccessAction = createAction(CREATE_EXERCISE_ACTION_SUCCESS, props<{ payload: ExerciseModel }>());
export const createExerciseErrorAction = createAction(CREATE_EXERCISE_ACTION_ERROR, props<{ payload: string }>());

const actions = union({
    createExerciseAction,
    createExerciseSuccessAction,
    createExerciseErrorAction,
});

export type ExerciseActionsType = typeof actions;
