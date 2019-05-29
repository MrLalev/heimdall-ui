import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { SharedTrainingsPage } from './shared-trainings.page';

const routes: Routes = [
  {
    path: '',
    component: SharedTrainingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SharedTrainingsPage]
})
export class SharedTrainingsPageModule {}
