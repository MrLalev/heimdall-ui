import { UserModel } from './user.model';
import { ExerciseModel } from './exercise.model';
import { SetModel } from './training.model';

export interface AuthUserStoreModel {
    loading: boolean;
    user: UserModel;
    message: string;
    error: string;
}

export interface SocialStoreModel {
    loading: boolean;
    users: Array<UserModel>;
    page: number;
    perPage: number;
    where: string;
    error: string;
}

export interface ProfileStoreModel {
    loading: boolean;
    user: UserModel;
    error: string;
}

export interface MuscleGroupsStoreModel {
    loading: boolean;
    error: string;
    groups: Array<string>;
}

export interface ExerciseStoreModel {
    loading: boolean;
    error: string;
    exercises: Array<{ exercise: ExerciseModel, set: Array<SetModel> }>;
}

export interface DropdownsStoreModel {
    muscleGroups: MuscleGroupsStoreModel;
    exercisesGroups: ExerciseStoreModel;
}
