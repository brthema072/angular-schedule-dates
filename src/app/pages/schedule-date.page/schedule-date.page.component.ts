import { Component } from '@angular/core';
import { toggleOption } from 'src/app/shared/components/simple-toggle/simple-toggle.component';

@Component({
  selector: 'schedule-date.page',
  templateUrl: './schedule-date.page.component.html',
  styleUrls: ['./schedule-date.page.component.scss'],
})
export class ScheduleDatePageComponent {
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

  toggleValues: Array<Partial<toggleOption>> = [
    { name: 'Semana', select: true },
    { name: 'Mês', select: false },
    { name: 'Ano', select: false },
  ];

  toggleSelected: toggleOption = this.toggleValues[0] as toggleOption;

  getWeekDayName(): string {
    return this.workDaysByWeek[new Date().getDay() - 1];
  }

  getToggleSelected(toggle: toggleOption) {
    this.toggleSelected = toggle;
  }
}
