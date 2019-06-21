import { createAction, props, union } from '@ngrx/store';
import { ExerciseModel, CreateExerciseModel } from '../models/exercise.model';
import { SetModel } from '../models/training.model';

const CREATE_EXERCISE_ACTION = 'CREATE_EXERCISE_ACTION';
const CREATE_EXERCISE_ACTION_SUCCESS = 'CREATE_EXERCISE_ACTION_SUCCESS';
const CREATE_EXERCISE_ACTION_ERROR = 'CREATE_EXERCISE_ACTION_ERROR';

const GET_AVAILABLE_EXERCISES = 'GET_AVAILABLE_EXERCISES';
const GET_AVAILABLE_EXERCISES_SUCCESS = 'GET_AVAILABLE_EXERCISES_SUCCESS';
const GET_AVAILABLE_EXERCISES_ERROR = 'GET_AVAILABLE_EXERCISES_ERROR';

export const createExerciseAction = createAction(CREATE_EXERCISE_ACTION, props<{ payload: CreateExerciseModel }>());
export const createExerciseSuccessAction = createAction(CREATE_EXERCISE_ACTION_SUCCESS, props<{ payload: ExerciseModel }>());
export const createExerciseErrorAction = createAction(CREATE_EXERCISE_ACTION_ERROR, props<{ payload: string }>());

export const getAvailableExercisesAction = createAction(GET_AVAILABLE_EXERCISES);
// tslint:disable-next-line:max-line-length
export const getAvailableExercisesSuccessAction = createAction(GET_AVAILABLE_EXERCISES_SUCCESS, props<{ payload: Array<{ exercise: ExerciseModel, set: Array<SetModel> }> }>());
export const getAvailableExercisesErrorAction = createAction(GET_AVAILABLE_EXERCISES_ERROR, props<{ payload: string }>());

const actions = union({
    createExerciseAction,
    createExerciseSuccessAction,
    createExerciseErrorAction,
    getAvailableExercisesAction,
    getAvailableExercisesSuccessAction,
    getAvailableExercisesErrorAction,
});

export type ExerciseActionsType = typeof actions;
