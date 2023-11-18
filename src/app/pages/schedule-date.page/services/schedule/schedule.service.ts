import { Injectable } from '@angular/core';
import { FormatDateFacade } from 'src/app/shared/facades/format-date.facade';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  selectedYear: number = 0;
  selectedMonth: number = 0;
  selectedDay: number = 0;

  constructor(private formatDateFacade: FormatDateFacade) {}

  buildDateToSpLocale(): string {
    return (
      this.formatDateFacade.formatDay(this.selectedDay) +
      '/' +
      this.formatDateFacade.formatMonth(this.selectedMonth) +
      '/' +
      this.selectedYear
    );
  }
}
