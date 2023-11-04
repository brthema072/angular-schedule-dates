import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.selectedYear = this.currentYear;

    for (let i = 1; i <= 6; i++) {
      this.years.push(this.currentYear - i);
    }

    for (let i = 0; i < 6; i++) {
      this.years.push(this.currentYear + i);
    }

    this.years = this.years.sort();
  }

  selectMonth(index: number) {
    console.log(this.months[index]);
  }
}
