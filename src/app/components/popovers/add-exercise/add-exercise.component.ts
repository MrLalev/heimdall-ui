import { Component, OnInit, Input } from '@angular/core';
import { ModalController, PopoverController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { FROM_STORE } from '../../../utils/constants';
import { getStateSnapshot } from '../../../store/selectors/base-selector';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-exercise',
  templateUrl: 'add-exercise.component.html',
  styleUrls: ['add-exercise.component.scss'],
})
export class AddExerciseComponent implements OnInit {
  form = this.fb.group({
    exercise: [''],
    set: this.fb.array([this.fb.group({
      set_type: ['NORMAL'],
      weight: [''],
      reps: ['']
    })]),
  });

  constructor(
    private fb: FormBuilder,
    private popoverController: PopoverController,
    private store: Store<AppState>,
    private navParams: NavParams
  ) {
    const exercise = this.navParams.get('exercise');
    this.form.controls['exercise'].setValue(exercise);
  }

  ngOnInit(): void {
  }

  onSetAdd() {
    const set = this.form.get('set') as FormArray;
    set.push(this.fb.group({
        set_type: [''],
        weight: [''],
        reps: [''],
    }));
  }

  async dismiss() {
    await this.popoverController.dismiss();
  }

  async onAddExercise() {
    await this.popoverController.dismiss(this.form.value);
  }
}
