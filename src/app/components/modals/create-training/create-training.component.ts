import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DropdownsStoreModel } from '../../../store/models/sore.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { FROM_STORE } from '../../../utils/constants';
import { getStateSnapshot } from '../../../store/selectors/base-selector';
import * as TrainingActions from '../../../store/actions/training.actions';
import * as ExerciseActions from '../../../store/actions/exercise.actions';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-training',
  templateUrl: 'create-training.component.html',
  styleUrls: ['create-training.component.scss'],
})
export class CreateTrainingComponent implements OnInit {
  dropdownsData: Observable<DropdownsStoreModel>;
  form = this.fb.group({
    name: [''],
    relative_time: [''],
    private: ['false'],
  });

  constructor(private fb: FormBuilder, private modalController: ModalController, private store: Store<AppState>) {
    this.dropdownsData = this.store.pipe(select(FROM_STORE.DROPDOWNS_STATE));
  }

  ngOnInit(): void {
    const dropdownsData = getStateSnapshot(this.store, FROM_STORE.DROPDOWNS_STATE);
    if (dropdownsData.exercisesGroups.exercises.length === 0) {
      this.store.dispatch(ExerciseActions.getAvailableExercisesAction());
    }
  }

  onCreateTraining() {
    const created_by = getStateSnapshot(this.store, FROM_STORE.AUTH_DATA).user._id;
    const private_option = this.form.value.private === 'true' ? true : false;
    // tslint:disable-next-line:max-line-length
    this.store.dispatch(TrainingActions.createTrainingAction({ payload: { ...this.form.value, created_by, exercises: [], private: private_option } }));
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
