import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DropdownsStoreModel } from '../../../store/models/sore.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { FROM_STORE } from '../../../utils/constants';
import { getStateSnapshot } from '../../../store/selectors/base-selector';
import * as DropdownActions from '../../../store/actions/dropdowns.actions';
import * as ExerciseActions from '../../../store/actions/exercise.actions';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-goal',
  templateUrl: 'create-goal.component.html',
  styleUrls: ['create-goal.component.scss'],
})
export class CreateGoalComponent implements OnInit {
  goals = ['RUNNING', 'CYCLING', 'WEIGHT LOSS', 'WEIGHT GAIN'];
  form = this.fb.group({
    goal: [''],
    description: [''],
    goal_type: [],
  });

  constructor(private fb: FormBuilder, private modalController: ModalController) {
  }

  ngOnInit(): void {
  }

  onCreateGoal() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
