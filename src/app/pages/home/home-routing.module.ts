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
            redirectTo: 'trainings',
            pathMatch: 'full'
          },
          {
            path: 'trainings',
            loadChildren: '../trainings/trainings.module#TrainingsPageModule',
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
