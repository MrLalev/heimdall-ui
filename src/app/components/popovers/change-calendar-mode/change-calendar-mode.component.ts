import { Component, OnInit, Input } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-change-calendar-mode',
  templateUrl: 'change-calendar-mode.component.html',
  styleUrls: ['change-calendar-mode.component.scss'],
})
export class ChangeCalendarModeComponent implements OnInit {
  calendarModes = [
    { key: 'week', value: 'Week' },
    { key: 'day', value: 'Day' },
  ];

  form = this.fb.group({
    mode: ['week'],
  });

  constructor(
    private fb: FormBuilder,
    private popoverController: PopoverController,
    private navParams: NavParams,
  ) {
    const selectedMode = this.navParams.get('selectedMode');
    this.form.controls['mode'].setValue(selectedMode);
  }

  ngOnInit(): void {
  }

  async dismiss() {
    await this.popoverController.dismiss();
  }

  async onSetMode() {
    await this.popoverController.dismiss(this.form.value);
  }
}
