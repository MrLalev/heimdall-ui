import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivityReportComponent } from '../../components/modals/activity-report/activity-report.component';

@Component({
  selector: 'app-activity',
  templateUrl: 'activity.page.html',
  styleUrls: ['activity.page.scss'],
})
export class ActivityPage implements OnInit {

  data = [
    '08/26/2019 - Monday Training',
    '08/26/2019 - Morning Running For 5 Weeks',
    '08/28/2019 - Athletic Fitness Shared Program',
    '08/29/2019 - Morning Running For 5 Weeks',
    '08/29/2019 - Wednesday Training',
    '08/30/2019 - Friday Training',
    '08/30/2019 - Morning Running For 5 Weeks',
    '09/09/2019 - Monday Training',
    '09/06/2019 - Friday Training',
    '09/07/2019 - Morning Running For 5 Weeks',
    '09/08/2019 - Morning Running For 5 Weeks',
    '09/16/2019 - Monday Training',
  ];
  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
  }

  onActivityReportOpen = async() => {
    const modal = await this.modalController.create({
      component: ActivityReportComponent,
      componentProps: {}
    });
    return await modal.present();
  }
}
