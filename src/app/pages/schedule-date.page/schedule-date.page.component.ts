import { Component, OnInit } from '@angular/core';
import { WorkHoursFacade } from 'src/app/shared/facades/work-hours.facade';

@Component({
  selector: 'schedule-date.page',
  templateUrl: './schedule-date.page.component.html',
  styleUrls: ['./schedule-date.page.component.scss'],
})
export class ScheduleDatePageComponent implements OnInit {
  currentDay: string = new Date().toLocaleDateString('pt-Br');
  workDays: string[] = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
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

      const formattedDate = date.toLocaleDateString('pt-Br');

      nextSevenDays.push({ day, date: formattedDate });
    }

    nextSevenDays = nextSevenDays
      .filter((element) => element.day != undefined)
      .sort(
        (a, b) => this.workDays.indexOf(a.day) - this.workDays.indexOf(b.day)
      );
    console.log(nextSevenDays);
  }

  getWeekDayName(): string {
    return this.workDays[new Date().getDay() - 1];
  }
}
