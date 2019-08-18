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
import { ExerciseAutocomplateService } from 'src/app/services/exercise.autocomplate.service';
import { AutoCompleteOptions, AutoCompleteComponent } from 'ionic4-auto-complete';
import { ViewChild } from '@angular/core';
import { FormArray } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { AddExerciseComponent } from '../../popovers/add-exercise/add-exercise.component';

@Component({
  selector: 'app-create-training',
  templateUrl: 'create-training.component.html',
  styleUrls: ['create-training.component.scss'],
})
export class CreateTrainingComponent implements OnInit {
  dropdownsData: Observable<DropdownsStoreModel>;
  @ViewChild('searchbar')
  searchbar: AutoCompleteComponent;

  form = this.fb.group({
    name: [''],
    relative_time: [''],
    private: ['true'],
    exercises: this.fb.array([]),
  });

  options: AutoCompleteOptions = {
    animated: false,
    autocorrect: 'off',
    cancelButtonIcon: 'md-arrow-back',
    cancelButtonText: 'Cancel',
    clearIcon: 'close',
    clearInput: false,
    clearOnEdit: false,
    mode: 'md',
    noItems: '',
    placeholder: 'Search',
    searchIcon: 'search',
    showCancelButton: false,
    spellcheck: 'off',
    value: '',
    autocomplete: 'on',
    debounce: 750,
    type: 'search'
  };

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private store: Store<AppState>,
    private exerciseAutocomplateService: ExerciseAutocomplateService,
    private popoverController: PopoverController
  ) {
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
    this.store.dispatch(TrainingActions.createTrainingAction({ payload: { ...this.form.value, exercises: this.form.value.exercises.map(e => {
      e.exercise = e.exercise._id ? e.exercise._id : e.exercise;
      return e;
    }), created_by, private: private_option } }));
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async onExerciseSelected(exercise) {
    this.searchbar.clearValue();
    this.searchbar.removeItem(exercise);

    const popover = await this.popoverController.create({
      component: AddExerciseComponent,
      componentProps: { exercise },
      translucent: true
    });

    popover.onDidDismiss().then(({ data }) => {
      if (data) {
        const exercises = this.form.get('exercises') as FormArray;
        exercises.push(this.fb.group({
          exercise: data.exercise,
          set: this.fb.array(data.set.map(s => this.fb.group({
            set_type: [s.set_type],
            weight: [s.weight],
            reps: [s.reps]
          }))),
        }));
      }
    });

    await popover.present();
  }

  onExerciseFilterChange(event) {
    console.log(event);
  }

  getSetVariable(data, field) {
    const result = [];
    data.map(d => {
      result.push(d.controls[field].value);
    });
    return result;
  }
}
