import { Component, OnInit } from '@angular/core';
import { WorkDaysFacade } from 'src/app/shared/facades/work-days.facade';
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

  constructor(
    private workHoursFacade: WorkHoursFacade,
    private workDaysFacade: WorkDaysFacade
  ) {}

  ngOnInit(): void {
    this.workDaysByMonth = this.workDaysFacade.buildWorkDatesForHeader(
      this.workDaysByWeek
    );

    this.workHours = this.workHoursFacade.buildHoursOfWork();
  }

  schedule(hour: string) {
    console.log(hour);
  }

  getWeekDayName(): string {
    return this.workDaysByWeek[new Date().getDay() - 1];
  }
}
