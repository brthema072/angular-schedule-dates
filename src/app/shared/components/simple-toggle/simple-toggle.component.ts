import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

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
export class SimpleToggleComponent implements OnInit, AfterViewInit {
  @Input() values: Array<Partial<toggleOption>> = <
    Array<Partial<toggleOption>>
  >{};
  @Output() toggleSelected: EventEmitter<toggleOption> =
    new EventEmitter<toggleOption>();

  options: Array<toggleOption> = Array<toggleOption>();

  ngOnInit(): void {
    this.options = this.values as any;
    this.buildOptionsValue();
  }

  ngAfterViewInit(): void {
    this.options.forEach((option, index) => {
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

    this.toggleSelected.emit(option);
  }

  private changeStyle(option: toggleOption) {
    const element = document.getElementById('option' + option.value);

    if (option.select) element?.classList.add('select');
    else element?.classList.remove('select');
  }

  private buildOptionsValue() {
    this.options.forEach((option, index) => {
      option.value = index;
    });
  }
}
