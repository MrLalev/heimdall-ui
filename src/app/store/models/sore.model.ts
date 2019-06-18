import { UserModel } from './user.model';

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

export interface DropdownsStoreModel {
    muscleGroups: MuscleGroupsStoreModel;
}
