import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgCalendarModule  } from 'ionic2-calendar';
import { SchedulePage } from './schedule.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule
  ],
  declarations: [SchedulePage]
})
export class SchedulePageModule {}
