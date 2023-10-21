import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkDaysFacade } from 'src/app/pages/schedule-date.page/facades/work-days.facade';
import { WorkHoursFacade } from 'src/app/pages/schedule-date.page/facades/work-hours.facade';
import {
  ModalScheduleDateComponent,
  SelectedDate,
} from './modal-schedule-date/modal-schedule-date.component';

@Component({
  selector: 'schedule-date.page',
  templateUrl: './schedule-date.page.component.html',
  styleUrls: ['./schedule-date.page.component.scss'],
})
export class ScheduleDatePageComponent implements OnInit {
  @ViewChild('modal') modal!: ModalScheduleDateComponent;

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

  scheduleDay: string = '';
  scheduleHour: string = '';

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

  openModal(day: string, hour: string) {
    this.modal.selectedDate = `${day} as ${hour}`;
    this.modal.day = day;
    this.modal.hour = hour;

    this.modal.simpleModal.open();
  }

  getWeekDayName(): string {
    return this.workDaysByWeek[new Date().getDay() - 1];
  }

  schedule(selectedDate: SelectedDate) {
    this.scheduleDay = selectedDate.day;
    this.scheduleHour = selectedDate.hour;
    console.log(this.scheduleDay, this.scheduleHour);
  }
}
