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
import { ExerciseAutocompleteService } from '../services/exercise.autocomplate.service';
import { AddExerciseComponent } from './popovers/add-exercise/add-exercise.component';
import { ChangeCalendarModeComponent } from './popovers/change-calendar-mode/change-calendar-mode.component';
import { AddEventComponent } from './modals/add-event/add-event.component';
import { CreateGoalComponent } from './modals/create-goal/create-goal.component';
import { ActivityReportComponent } from './modals/activity-report/activity-report.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    NgxChartsModule,
  ],
  declarations: [
    UserCardComponent,
    UsersListComponent,
    CreateExerciseComponent,
    CreateTrainingComponent,
    ProfileComponent,
    AddExerciseComponent,
    ChangeCalendarModeComponent,
    AddEventComponent,
    CreateGoalComponent,
    ActivityReportComponent,
  ],
  exports: [
    UserCardComponent,
    UsersListComponent,
    CreateExerciseComponent,
    CreateTrainingComponent,
    ProfileComponent,
    AddExerciseComponent,
    ChangeCalendarModeComponent,
    AddEventComponent,
    CreateGoalComponent,
    ActivityReportComponent,
  ],
  entryComponents: [
    CreateExerciseComponent,
    CreateTrainingComponent,
    ProfileComponent,
    AddExerciseComponent,
    ChangeCalendarModeComponent,
    AddEventComponent,
    CreateGoalComponent,
    ActivityReportComponent,
  ],
  providers: [
    ExerciseAutocompleteService
  ]
})

export class SharedModule {}

