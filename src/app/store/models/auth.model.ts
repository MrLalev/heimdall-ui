import { UserModel } from './user.model';

export interface AuthModel {
    token: string;
    refreshToken: string;
}

export interface AuthUserModel {
    email: string;
    password: string;
}
