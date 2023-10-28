import { Component } from '@angular/core';

@Component({
  selector: 'monthly-view',
  templateUrl: './monthly-view.component.html',
  styleUrls: ['./monthly-view.component.scss'],
})
export class MonthlyViewComponent {
  selectedYear: number = new Date().getFullYear();

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

  selectMonth(index: number) {
    console.log(this.months[index]);
  }
}
