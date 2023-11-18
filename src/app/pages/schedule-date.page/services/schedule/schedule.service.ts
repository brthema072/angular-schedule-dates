import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  selectedYear: number = 0;
  selectedMonth: number = 0;
  selectedDay: number = 0;

  constructor() {}

  buildDateToSpLocale(): string {
    return (
      this.selectedDay + '/' + this.selectedMonth + '/' + this.selectedYear
    );
  }
}
