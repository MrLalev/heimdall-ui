import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPage } from './workout.page';
import { PAGE_ROUTES } from '../../utils/constants';

const routes: Routes = [
    {
      path: '',
      component: WorkoutPage,
        children: [
          {
            path: '',
            redirectTo: 'myplan',
            pathMatch: 'full'
          },
          {
            path: PAGE_ROUTES.MYPLANE,
            loadChildren: '../tabs/workout-tabs/myplan/myplan.module#MyplanPageModule',
          },
          {
            path: PAGE_ROUTES.SHARED,
            loadChildren: '../tabs/workout-tabs/shared-trainings/shared-trainings.module#SharedTrainingsPageModule',
          },
          {
            path: PAGE_ROUTES.SCHEDULE,
            loadChildren: '../tabs/workout-tabs/schedule/schedule.module#SchedulePageModule',
          },
          {
            path: PAGE_ROUTES.GOALS,
            loadChildren: '../tabs/workout-tabs/goals/goals.module#GoalsPageModule',
          },
        ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WorkoutRoutingModule {}
