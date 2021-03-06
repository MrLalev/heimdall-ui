import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WorkoutPage } from './workout.page';
import { WorkoutRoutingModule } from './workout-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutRoutingModule
  ],
  declarations: [WorkoutPage]
})
export class WorkoutPageModule {}
