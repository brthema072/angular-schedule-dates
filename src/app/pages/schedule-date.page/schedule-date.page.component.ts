import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'schedule-date.page',
  templateUrl: './schedule-date.page.component.html',
  styleUrls: ['./schedule-date.page.component.scss'],
})
export class ScheduleDatePageComponent implements OnInit {
  currentDay: string = new Date().toISOString();
  workHours: string[] = [];

  ngOnInit(): void {
    this.buildHoursOfWork();
  }

  buildHoursOfWork() {
    const initTime: number = 8;
    const finalizaeWork: number = 17;

    for (let i = initTime; i <= finalizaeWork; i++) {
      this.workHours.push(this.formatHours(i));
      this.workHours.push(this.formatHalfHours(i));
    }
  }

  private formatHours(hour: number): string {
    if (hour <= 9) {
      return '0' + hour + ':00';
    }

    return hour + ':00';
  }

  private formatHalfHours(hour: number): string {
    if (hour <= 9) {
      return '0' + hour + ':30';
    }

    return hour + ':30';
  }
}
