import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage implements OnInit {
  GENDER_ENUM = {
    'NONE': 'NONE',
    'M': 'MAN',
    'W': 'WOMAN'
  };

  GENDER_ARR = [
    'NONE',
    'MAN',
    'WOMAN',
  ];

  METRIC_ENUM = {
    'METRIC': 'METRIC',
    'IMPERIAL': 'IMPERIAL'
  };

  METRIC_ARR = [
    'METRIC',
    'IMPERIAL'
  ];

  form = this.fb.group({
    weight: [''],
    gender: [this.GENDER_ENUM.NONE],
    height: [''],
    birthday: [''],
    country: [''],
    description: [''],
    metric_type: [this.METRIC_ENUM.METRIC],
  });

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
  }

  onPersonalInformationUpdate() {
  }
}
