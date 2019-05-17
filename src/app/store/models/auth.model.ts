export interface AuthModel {
    token: string;
    refreshToken: string;
}

export interface AuthStoreModel {
    // TODO: ADD USER TYPE
    user: any;
    error: string;
}
