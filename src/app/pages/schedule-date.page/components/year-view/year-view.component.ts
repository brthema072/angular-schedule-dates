import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'year-view',
  templateUrl: './year-view.component.html',
  styleUrls: ['./year-view.component.scss'],
})
export class YearViewComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  years: number[] = [];
  selectedYear: number = 0;

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
}
