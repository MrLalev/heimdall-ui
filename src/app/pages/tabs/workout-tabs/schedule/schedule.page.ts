import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, ModalController } from '@ionic/angular';
import { ChangeCalendarModeComponent } from '../../../../components/popovers/change-calendar-mode/change-calendar-mode.component';
import { AddEventComponent } from '../../../../components/modals/add-event/add-event.component';

@Component({
  selector: 'app-schedule',
  templateUrl: 'schedule.page.html',
  styleUrls: ['schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  startingHours = new Date().getHours();
  selectedDay = new Date();
  selectedObject;
  eventSource = [];
  isToday: boolean;
  calendarModes = [
    { key: 'week', value: 'Week' },
    { key: 'day', value: 'Day' },
  ];
  calendar = {
    mode: this.calendarModes[0].key,
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, private popoverController: PopoverController, private modalController: ModalController) {
  }

  ngOnInit(): void {
  }

  loadEvents() {
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onTimeSelected(ev) {
    this.selectedObject = ev;
  }

  onCurrentDateChanged(event: Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();

    this.selectedDay = event;
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  markDisabled = (date: Date) => {
    const current = new Date();
    current.setHours(0, 0, 0);
    return (date < current);
  }

  blockDayEvent(date) {
    const startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

    const endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

    const events = this.eventSource;
    events.push({
      title: 'All Day ',
      startTime: startTime,
      endTime: endTime,
      allDay: true
    });
    this.eventSource = [];
    setTimeout(() => {
      this.eventSource = events;
    });
  }

  async addEvent() {
    const modal = await this.modalController.create({
      component: AddEventComponent,
      componentProps: {}
    });
    modal.onDidDismiss().then(({ data }) => {
      if (data) {
        const eventData = data;
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
        this.eventSource = [...this.eventSource, eventData];
      }
    });
    return await modal.present();
  }

  onOptionSelected($event: any) {
  }

  async changeCalendarMode() {
    const popover = await this.popoverController.create({
      component: ChangeCalendarModeComponent,
      componentProps: { selectedMode: this.calendar.mode },
      translucent: true
    });

    popover.onDidDismiss().then(({ data }) => {
      if (data) {
        this.calendar.mode = data.mode;
      }
    });

    await popover.present();
  }
}
