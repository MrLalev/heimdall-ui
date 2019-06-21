import { createAction, props, union } from '@ngrx/store';
import { TrainingModel, CreateTrainingModel } from '../models/training.model';

const CREATE_TRAINING_ACTION = 'CREATE_TRAINING_ACTION';
const CREATE_TRAINING_ACTION_SUCCESS = 'CREATE_TRAINING_ACTION_SUCCESS';
const CREATE_TRAINING_ACTION_ERROR = 'CREATE_TRAINING_ACTION_ERROR';

export const createTrainingAction = createAction(CREATE_TRAINING_ACTION, props<{ payload: CreateTrainingModel }>());
export const createTrainingSuccessAction = createAction(CREATE_TRAINING_ACTION_SUCCESS, props<{ payload: TrainingModel }>());
export const createTrainingErrorAction = createAction(CREATE_TRAINING_ACTION_ERROR, props<{ payload: string }>());

const actions = union({
    createTrainingAction,
    createTrainingSuccessAction,
    createTrainingErrorAction,
});

export type TrainingActionsType = typeof actions;
