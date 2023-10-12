import { Component, OnInit } from '@angular/core';
import { WorkHoursFacade } from 'src/app/shared/facades/work-hours.facade';

@Component({
  selector: 'schedule-date.page',
  templateUrl: './schedule-date.page.component.html',
  styleUrls: ['./schedule-date.page.component.scss'],
})
export class ScheduleDatePageComponent implements OnInit {
  currentDay: string = new Date().toLocaleDateString('pt-Br');
  workDaysByWeek: string[] = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  workDaysByMonth: string[] = [];
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

    for (let i = 0; i < today.getDay() - 1; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const day = this.workDaysByWeek[date.getDay() - 1];

      const formattedDate = date.toLocaleDateString('pt-Br');

      nextSevenDays.push({ day, date: formattedDate });
    }

    for (let i = 1; i <= today.getDay(); i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const day = this.workDaysByWeek[date.getDay() - 1];

      const formattedDate = date.toLocaleDateString('pt-Br');

      nextSevenDays.push({ day, date: formattedDate });
    }

    nextSevenDays = nextSevenDays
      .filter((element) => element.day != undefined)
      .sort(
        (a, b) =>
          this.workDaysByWeek.indexOf(a.day) -
          this.workDaysByWeek.indexOf(b.day)
      );

    this.workDaysByMonth = nextSevenDays.map((element) => element.date);
  }

  getWeekDayName(): string {
    return this.workDaysByWeek[new Date().getDay() - 1];
  }
}
