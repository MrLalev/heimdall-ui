import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPage } from './workout.page';
import { PAGE_ROUTES } from '../../utils/page-routes';

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
            loadChildren: '../myplan/myplan.module#MyplanPageModule',
          },
          {
            path: PAGE_ROUTES.SHARED,
            loadChildren: '../shared/shared.module#SharedPageModule',
          },
          {
            path: PAGE_ROUTES.SCHEDULE,
            loadChildren: '../schedule/schedule.module#SchedulePageModule',
          },
          {
            path: PAGE_ROUTES.GOALS,
            loadChildren: '../goals/goals.module#GoalsPageModule',
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
