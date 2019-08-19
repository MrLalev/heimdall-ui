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
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { ExerciseAutocomplateService } from '../services/exercise.autocomplate.service';
import { AddExerciseComponent } from './popovers/add-exercise/add-exercise.component';
import { ChangeCalendarModeComponent } from './popovers/change-calendar-mode/change-calendar-mode.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  declarations: [
    UserCardComponent,
    UsersListComponent,
    CreateExerciseComponent,
    CreateTrainingComponent,
    ProfileComponent,
    AddExerciseComponent,
    ChangeCalendarModeComponent,
  ],
  exports: [
    UserCardComponent,
    UsersListComponent,
    CreateExerciseComponent,
    CreateTrainingComponent,
    ProfileComponent,
    AddExerciseComponent,
    ChangeCalendarModeComponent,
  ],
  entryComponents: [
    CreateExerciseComponent,
    CreateTrainingComponent,
    ProfileComponent,
    AddExerciseComponent,
    ChangeCalendarModeComponent,
  ],
  providers: [
    ExerciseAutocomplateService
  ]
})

export class SharedModule {}

