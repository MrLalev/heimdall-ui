import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-exercise',
  templateUrl: 'create-exercise.component.html',
  styleUrls: ['create-exercise.component.scss'],
})
export class CreateExerciseComponent implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {}

  dismiss() {
    this.modalController.dismiss();
  }
}
