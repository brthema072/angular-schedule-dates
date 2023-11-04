import { Injectable } from '@angular/core';

export type selections = {
  selectedYear: number;
  selectedMonth: number;
};

@Injectable({
  providedIn: 'root',
})
export class SelectedDate {
  date: Date = new Date();
}
