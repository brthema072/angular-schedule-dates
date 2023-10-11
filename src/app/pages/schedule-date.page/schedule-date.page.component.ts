import { Component, OnInit } from '@angular/core';
import { WorkHoursFacade } from 'src/app/shared/facades/work-hours.facade';

@Component({
  selector: 'schedule-date.page',
  templateUrl: './schedule-date.page.component.html',
  styleUrls: ['./schedule-date.page.component.scss'],
})
export class ScheduleDatePageComponent implements OnInit {
  currentDay: string = new Date().toISOString();
  workDays: string[] = ['1', '2', '3', '4', '5', '6'];
  workHours: string[] = [];

  constructor(private workHoursFacade: WorkHoursFacade) {}

  ngOnInit(): void {
    this.workHours = this.workHoursFacade.buildHoursOfWork();
  }

  schedule(hour: string) {
    console.log(hour);
  }
}
