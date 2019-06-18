import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DropdownsStoreModel } from '../../../store/models/sore.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { FROM_STORE } from '../../../utils/constants';
import { getStateSnapshot } from '../../../store/selectors/base-selector';
import * as DropdownActions from '../../../store/actions/dropdowns.actions';

@Component({
  selector: 'app-create-exercise',
  templateUrl: 'create-exercise.component.html',
  styleUrls: ['create-exercise.component.scss'],
})
export class CreateExerciseComponent implements OnInit {
  dropdownsData: Observable<DropdownsStoreModel>;
  constructor(private modalController: ModalController, private store: Store<AppState>) {
    this.dropdownsData = this.store.pipe(select(FROM_STORE.DROPDOWNS_STATE));
  }

  ngOnInit(): void {
    const dropdownsData = getStateSnapshot(this.store, FROM_STORE.DROPDOWNS_STATE);
    console.log(dropdownsData, FROM_STORE.DROPDOWNS_STATE);
    if (dropdownsData.muscleGroups.groups.length === 0) {
      this.store.dispatch(DropdownActions.getMuscleGroupsAction());
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
