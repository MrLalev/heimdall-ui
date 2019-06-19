import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AvatarModule } from 'ngx-avatar';
import { CreateExerciseComponent } from './modals/create-exercise/create-exercise.component';
import { CreateTrainingComponent } from './modals/create-training/create-training.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './modals/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserCardComponent,
    UsersListComponent,
    CreateExerciseComponent,
    CreateTrainingComponent,
    ProfileComponent,
  ],
  exports: [
    UserCardComponent,
    UsersListComponent,
    CreateExerciseComponent,
    CreateTrainingComponent,
    ProfileComponent,
  ],
  entryComponents: [
    CreateExerciseComponent,
    CreateTrainingComponent,
    ProfileComponent,
  ]
})

export class SharedModule {}

