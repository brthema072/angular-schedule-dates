import { AfterViewInit, Component, Input } from '@angular/core';

export type toggleOption = {
  name: string;
  value: any;
  select: boolean;
};

@Component({
  selector: 'simple-toggle',
  templateUrl: './simple-toggle.component.html',
  styleUrls: ['./simple-toggle.component.scss'],
})
export class SimpleToggleComponent implements AfterViewInit {
  @Input() options: Array<toggleOption> = <Array<toggleOption>>{};

  ngAfterViewInit(): void {
    this.options.forEach((option) => {
      this.changeStyle(option);
    });
  }

  selectOption(option: toggleOption) {
    option.select = !option.select;

    const otherOptions = this.options.filter((opt) => opt.name != option.name);

    otherOptions.forEach((otherOption) => {
      otherOption.select = false;
    });

    this.options.forEach((option) => {
      this.changeStyle(option);
    });
  }

  private changeStyle(option: toggleOption) {
    const element = document.getElementById('option' + option.value);

    if (option.select) element?.classList.add('select');
    else element?.classList.remove('select');
  }
}
