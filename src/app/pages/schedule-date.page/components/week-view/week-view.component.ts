import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ModalScheduleDateComponent,
  SelectedDate,
} from '../modal-schedule-date/modal-schedule-date.component';
import { WorkDaysFacade } from '../../facades/work-days.facade';
import { WorkHoursFacade } from '../../facades/work-hours.facade';
import { ScheduleService } from '../../services/schedule/schedule.service';

@Component({
  selector: 'week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent implements OnInit {
  @ViewChild('modal') modal!: ModalScheduleDateComponent;

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
    private workDaysFacade: WorkDaysFacade,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.workDaysByMonth = this.workDaysFacade.buildWorkDatesForHeader(
      this.workDaysByWeek
    );

    this.workHours = this.workHoursFacade.buildHoursOfWork();

    console.log(this.scheduleService.buildDateToSpLocale());
  }

  openModal(day: string, hour: string) {
    this.modal.selectedDate = `${day} as ${hour}`;
    this.modal.day = day;
    this.modal.hour = hour;

    this.modal.simpleModal.open();
  }

  schedule(selectedDate: SelectedDate) {
    this.scheduleDay = selectedDate.day;
    this.scheduleHour = selectedDate.hour;
    console.log(this.scheduleDay, this.scheduleHour);
  }
}
