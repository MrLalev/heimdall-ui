import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateGoalComponent } from '../../../../components/modals/create-goal/create-goal.component';

@Component({
  selector: 'app-goals',
  templateUrl: 'goals.page.html',
  styleUrls: ['goals.page.scss'],
})
export class GoalsPage implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
  }

  createGoal = async() => {
    const modal = await this.modalController.create({
      component: CreateGoalComponent,
      componentProps: {}
    });
    return await modal.present();
  }
}
