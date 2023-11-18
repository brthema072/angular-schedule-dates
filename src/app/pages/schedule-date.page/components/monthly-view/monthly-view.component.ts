import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SelectedDate, selections } from './shared/models/selections.model';

@Component({
  selector: 'monthly-view',
  templateUrl: './monthly-view.component.html',
  styleUrls: ['./monthly-view.component.scss'],
})
export class MonthlyViewComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  months: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  years: number[] = [];
  selectedYear: number = 0;
  selectedMonth: number = 0;
  showMonthlyView: boolean = true;

  selections: BehaviorSubject<selections> = new BehaviorSubject<selections>({
    selectedMonth: this.selectedMonth,
    selectedYear: this.selectedYear,
  });

  constructor(private selectDate: SelectedDate) {}

  ngOnInit(): void {
    this.selectedYear = this.currentYear;

    for (let i = 1; i <= 2; i++) {
      this.years.push(this.currentYear - i);
    }

    for (let i = 0; i < 1; i++) {
      this.years.push(this.currentYear + i);
    }

    this.years = this.years.sort();
  }

  selectMonth(month: number) {
    this.showMonthlyView = !this.showMonthlyView;
    this.selectedMonth = month;

    this.selections.next({
      selectedMonth: this.selectedMonth,
      selectedYear: this.selectedYear,
    });
  }

  showSelectedDate() {
    console.log(this.selectDate.date);
  }
}
