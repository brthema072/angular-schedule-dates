import { Component } from '@angular/core';
import { toggleOption } from 'src/app/shared/components/simple-toggle/simple-toggle.component';
import { ScheduleToggleService } from './services/toggle/schedule-toggle.service';

@Component({
  selector: 'schedule-date.page',
  templateUrl: './schedule-date.page.component.html',
  styleUrls: ['./schedule-date.page.component.scss'],
})
export class ScheduleDatePageComponent {
  constructor(public scheduleToggleService: ScheduleToggleService) {}

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

  getWeekDayName(): string {
    return this.workDaysByWeek[new Date().getDay() - 1];
  }

  getToggleSelected(toggle: toggleOption) {
    this.scheduleToggleService.toggleSelected = toggle;
  }
}
