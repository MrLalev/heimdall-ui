import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PAGE_ROUTES } from '../../utils/constants';

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
            path: PAGE_ROUTES.WORKOUT,
            loadChildren: '../workout/workout.module#WorkoutPageModule',
          },
          {
            path: PAGE_ROUTES.FEED,
            loadChildren: '../feed/feed.module#FeedPageModule',
          },
          {
            path: PAGE_ROUTES.ACTIVITY,
            loadChildren: '../activity/activity.module#ActivityPageModule',
          },
          {
            path: PAGE_ROUTES.SETTINGS,
            loadChildren: '../settings/settings.module#SettingsPageModule',
          },
          {
            path: PAGE_ROUTES.SOCIAL,
            loadChildren: '../social/social.module#SocialPageModule',
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
export class HomeRoutingModule {}
