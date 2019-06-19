import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CreateExerciseModel } from '../store/models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private apollo: Apollo) { }

  fetchExercises(page, perPage, where) {
    return this.apollo.watchQuery({
      query: gql`
        query getExercises($where: JSONObject!, $restrict: JSONObject!) {
          getExercises(where: $where, restrict: $restrict) {
            _id,
            private,
            name,
            description,
            muscle_group,
            created_by,
            video_materials,
            created_at
          }
        }
      `,
      variables: {
        where:  {}, // parseSearchFilter(where, SEARCH_FIELDS.USERS),
        restrict: {},  // { limit: perPage, skip: perPage * page },
      },
    }).valueChanges;
  }


  createExercise(exercise: CreateExerciseModel) {
    return this.apollo.mutate({
      mutation: gql`
        mutation createExercise($input: ExerciseInputType!) {
          createExercise(input: $input) {
            _id,
            private,
            name,
            description,
            muscle_group,
            created_by,
            video_materials,
            created_at
          }
        }
      `,
      variables: {
        input: {
          name: exercise.name,
          description: exercise.description,
          private: exercise.private,
          muscle_group: exercise.muscle_group,
          created_by: exercise.created_by,
          video_materials: exercise.video_materials
        }
      }
    });
  }
}
