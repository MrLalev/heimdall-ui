import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: 'add-event.component.html',
  styleUrls: ['add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  minDate = new Date().toISOString();
  form = this.fb.group({
    title: [''],
    training: [''],
    startTime: [new Date().toISOString()],
    endTime: [new Date().toISOString()]
  });

  constructor(private fb: FormBuilder, private modalController: ModalController) {
  }

  ngOnInit(): void {
  }

  onCreateEvent() {
    this.modalController.dismiss(this.form.value);
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
