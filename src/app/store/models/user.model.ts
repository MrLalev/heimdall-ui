export interface PersonalDataModel {
    weight: number;
    gender: string;
    height: number;
    birthday: string;
    country: string;
    metric_type: string;
    description: string;
}

export interface UserModel {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    personal_data: PersonalDataModel;
    personal_trainings: Array<any>;
    shared_trainings: Array<any>;
    posts: Array<any>;
    followers: Array<any>;
    followers_count: number;
    following: Array<any>;
    following_count: number;
    activity_log: Array<any>;
    created_at: string;
    updated_at: string;
}

export interface CreateUserModel {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}
