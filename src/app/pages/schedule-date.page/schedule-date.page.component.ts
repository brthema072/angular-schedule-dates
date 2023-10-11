import { Component, OnInit } from '@angular/core';
import { WorkHoursFacade } from 'src/app/shared/facades/work-hours.facade';

@Component({
  selector: 'schedule-date.page',
  templateUrl: './schedule-date.page.component.html',
  styleUrls: ['./schedule-date.page.component.scss'],
})
export class ScheduleDatePageComponent implements OnInit {
  currentDay: string = new Date().toISOString();
  workDays: string[] = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo',
  ];
  workHours: string[] = [];

  constructor(private workHoursFacade: WorkHoursFacade) {}

  ngOnInit(): void {
    this.buildWorkDatesForHeader();
    this.workHours = this.workHoursFacade.buildHoursOfWork();
  }

  schedule(hour: string) {
    console.log(hour);
  }

  private buildWorkDatesForHeader() {
    const today = new Date();
    let nextSevenDays: any[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const day = this.workDays[date.getDay()];

      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;

      nextSevenDays.push({ day, date: formattedDate });
    }

    console.log(nextSevenDays);
  }
}
