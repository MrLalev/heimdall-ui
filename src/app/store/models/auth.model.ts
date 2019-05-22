import { UserModel } from './user.model';

export interface AuthModel {
    token: string;
    refreshToken: string;
}

export interface AuthUserStoreModel {
    loading: boolean;
    user: UserModel;
    message: string;
    error: string;
}

export interface AuthUserModel {
    email: string;
    password: string;
}
