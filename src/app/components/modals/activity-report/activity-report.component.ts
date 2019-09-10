import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-activity-report',
  templateUrl: 'activity-report.component.html',
  styleUrls: ['activity-report.component.scss'],
})
export class ActivityReportComponent implements OnInit {
  params = [
    'Chin Ups',
    'DB OHP',
    'Lat Pull Down',
    'Leg Extension'
  ];

  multi: any[] = [
    {
      name: 'Chin Ups',
      series: [
        {
          name: new Date('08/26/2019'),
          value: 10
        },
        {
          name: new Date('09/09/2019'),
          value: 15
        },
        {
          name: new Date('09/16/2019'),
          value: 12
        }
      ]
    },
    {
      name: 'Lat Pull Down',
      series: [
        {
          name: new Date('08/26/2019'),
          value: 20
        },
        {
          name: new Date('09/09/2019'),
          value: 12
        },
        {
          name: new Date('09/16/2019'),
          value: 15
        }
      ]
    }
  ];

  multi2: any[] = [
    {
      name: 'Chin Ups',
      series: [
        {
          name: new Date('08/26/2019'),
          value: 5
        },
        {
          name: new Date('09/09/2019'),
          value: 7
        },
        {
          name: new Date('09/16/2019'),
          value: 9
        }
      ]
    },
    {
      name: 'Lat Pull Down',
      series: [
        {
          name: new Date('08/26/2019'),
          value: 25
        },
        {
          name: new Date('09/09/2019'),
          value: 40
        },
        {
          name: new Date('09/16/2019'),
          value: 35
        }
      ]
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendPosition = 'below';
  showXAxisLabel = false;
  xAxisLabel = 'Date';
  showYAxisLabel = false;
  yAxisLabel = 'REPS';
  timeline = true;
  view: any[] = [360, 300];

  colorScheme = {
    domain: ['#2B2B3D', '#FCB016', '#C7B42C', '#AAAAAA']
  };

  form = this.fb.group({
    report_params: [],
  });

  constructor(private fb: FormBuilder, private modalController: ModalController) {
  }

  ngOnInit(): void {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
