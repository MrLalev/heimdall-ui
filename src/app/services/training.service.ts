import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CreateTrainingModel } from '../store/models/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private apollo: Apollo) { }

  // fetchExercises(page, perPage, where) {
  //   return this.apollo.watchQuery({
  //     query: gql`
  //       query getExercises($where: JSONObject!, $restrict: JSONObject!) {
  //         getExercises(where: $where, restrict: $restrict) {
  //           _id,
  //           private,
  //           name,
  //           description,
  //           muscle_group,
  //           created_by,
  //           video_materials,
  //           created_at
  //         }
  //       }
  //     `,
  //     variables: {
  //       where:  {}, // parseSearchFilter(where, SEARCH_FIELDS.USERS),
  //       restrict: {},  // { limit: perPage, skip: perPage * page },
  //     },
  //   }).valueChanges;
  // }

  createTraining(training: CreateTrainingModel) {
    return this.apollo.mutate({
      mutation: gql`
        mutation createTraining($input: TrainingInputType!) {
          createTraining(input: $input) {
            _id,
            private,
            name,
            relative_time,
            exercises {
              exercise {
                _id,
                name
              },
              set {
                set_type,
                weight,
                reps
              }
            },
            created_by,
            shared_with,
            created_at,
            updated_at
          }
        }
      `,
      variables: {
        input: {
          name: training.name,
          relative_time: training.relative_time,
          private: training.private,
          exercises: training.exercises,
          created_by: training.created_by,
        }
      }
    });
  }
}
