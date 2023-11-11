import { Injectable } from '@angular/core';
import { toggleOption } from 'src/app/shared/components/simple-toggle/simple-toggle.component';
import { SimpleToggleService } from 'src/app/shared/services/simple-toggle/simple-toggle.service';

@Injectable({
  providedIn: 'root',
})
export class ScheduleToggleService {
  toggleValues: Array<Partial<toggleOption>> = [
    { name: 'Semana', select: true },
    { name: 'Mês', select: false },
    { name: 'Ano', select: false },
  ];

  toggleSelected: toggleOption = this.toggleValues[0] as toggleOption;

  constructor(private simpleToggleService: SimpleToggleService) {}

  chooseWeekToggle() {
    this.toggleSelected = {
      name: 'Semana',
      select: true,
      value: 0,
    };

    this.simpleToggleService.changeToggleSelected(this.toggleSelected);
  }

  chooseMonthToggle() {
    this.toggleSelected = { name: 'Mês', select: true, value: 1 };

    this.simpleToggleService.changeToggleSelected(this.toggleSelected);
  }

  chooseYearToogle() {
    this.toggleSelected = { name: 'Ano', select: true, value: 2 };

    this.simpleToggleService.changeToggleSelected(this.toggleSelected);
  }
}
