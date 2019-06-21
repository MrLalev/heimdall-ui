import { ExerciseModel } from './exercise.model';

export interface SetModel {
    set_type: string;
    weight: number;
    reps: number;
}

export interface CreateTrainingModel {
    private: boolean;
    name: string;
    relative_time: number;
    created_by: string;
    exercises: Array<{ exercise: string, set: Array<SetModel> }>;
}

export interface TrainingModel {
    _id: string;
    private: boolean;
    name: string;
    relative_time: number;
    created_by: string;
    exercises: Array<{ exercise: ExerciseModel, set: Array<SetModel> }>;
    shared_with: Array<any>;
    created_at: string;
    updated_at: String;
}

