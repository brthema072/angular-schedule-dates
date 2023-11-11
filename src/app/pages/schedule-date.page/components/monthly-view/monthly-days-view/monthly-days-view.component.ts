import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SelectedDate, selections } from '../shared/models/selections.model';
import { ScheduleToggleService } from '../../../services/toggle/schedule-toggle.service';

@Component({
  selector: 'monthly-days-view',
  templateUrl: './monthly-days-view.component.html',
  styleUrls: ['./monthly-days-view.component.scss'],
})
export class MonthlyDaysViewComponent implements OnInit {
  @Input() selections: BehaviorSubject<selections> =
    new BehaviorSubject<selections>({
      selectedMonth: 0,
      selectedYear: 0,
    });

  @Output() emitMonthlyView: EventEmitter<boolean> = new EventEmitter(false);

  days: Date[] = new Array<Date>();
  selectedYear: number = 0;
  selectedMonth: number = 0;

  constructor(
    private selectedDate: SelectedDate,
    private scheduleToggleService: ScheduleToggleService
  ) {}

  ngOnInit(): void {
    this.selections.subscribe(({ selectedYear, selectedMonth }) => {
      this.selectedYear = selectedYear;
      this.selectedMonth = selectedMonth;

      this.buildDaysByMonth(selectedYear, selectedMonth);
    });
  }

  private buildDaysByMonth(selectedYear: number, selectedMonth: number) {
    let date = new Date(selectedYear, selectedMonth, 1);

    while (date.getMonth() === selectedMonth) {
      this.days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  }

  selectDay(day: number) {
    this.selectedDate.date = new Date(
      this.selectedYear,
      this.selectedMonth,
      day
    );

    this.changeToMonthlyView();
  }

  private changeToMonthlyView() {
    this.scheduleToggleService.chooseWeekToggle();

    this.emitMonthlyView.emit(true);
  }

  backView() {
    this.emitMonthlyView.emit(true);
  }
}
