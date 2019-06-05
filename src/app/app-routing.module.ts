import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { PAGE_ROUTES } from './utils/constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: PAGE_ROUTES.HOME,
    pathMatch: 'full'
  },
  {
    path: PAGE_ROUTES.HOME,
    loadChildren: './pages/home/home.module#HomePageModule',
    canActivate: [AuthGuard],
  },
  {
    path: PAGE_ROUTES.PROFILE,
    loadChildren: './pages/profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuard],
  },
  { path: PAGE_ROUTES.LOGIN, loadChildren: './pages/login/login.module#LoginPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
