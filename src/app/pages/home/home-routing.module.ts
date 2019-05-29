import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
      path: '',
      component: HomePage,
        children: [
          {
            path: '',
            redirectTo: 'workout',
            pathMatch: 'full'
          },
          {
            path: 'workout',
            loadChildren: '../workout/workout.module#WorkoutPageModule',
          }
        ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
