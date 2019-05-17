export interface AuthModel {
    token: string;
    refreshToken: string;
}

// TODO: ADD LOADING STATE
export interface AuthStoreModel {
    // TODO: ADD USER TYPE
    user: any;
    error: string;
}
