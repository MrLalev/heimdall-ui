import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateExerciseComponent } from '../../../../components/modals/create-exercise/create-exercise.component';
import { CreateTrainingComponent } from '../../../../components/modals/create-training/create-training.component';


@Component({
  selector: 'app-myplan',
  templateUrl: 'myplan.page.html',
  styleUrls: ['myplan.page.scss'],
})
export class MyplanPage implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
  }

  onCreateExercise = async() => {
    const modal = await this.modalController.create({
      component: CreateExerciseComponent,
      componentProps: {}
    });
    return await modal.present();
  }

  onCreateTraining = async() => {
    const modal = await this.modalController.create({
      component: CreateTrainingComponent,
      componentProps: {}
    });
    return await modal.present();
  }
}
