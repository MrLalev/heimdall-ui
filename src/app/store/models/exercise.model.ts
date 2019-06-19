export interface CreateExerciseModel {
    private: boolean;
    name: string;
    description: string;
    muscle_group: Array<string>;
    created_by: string;
    video_materials: string;
}

export interface ExerciseModel {
    _id: string;
    private: boolean;
    name: string;
    description: string;
    muscle_group: Array<string>;
    created_by: string;
    video_materials: string;
    created_at: string;
}
