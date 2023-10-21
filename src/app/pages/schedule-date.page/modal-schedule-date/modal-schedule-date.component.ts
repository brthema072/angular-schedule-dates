import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SimpleModalComponent } from 'src/app/shared/components/simple-modal/simple-modal.component';
import { SimpleModalService } from 'src/app/shared/services/simple-modal/simple-modal.service';

export type SelectedDate = {
  day: string;
  hour: string;
};

@Component({
  selector: 'modal-schedule-date',
  templateUrl: './modal-schedule-date.component.html',
  styleUrls: ['./modal-schedule-date.component.scss'],
})
export class ModalScheduleDateComponent {
  @ViewChild('simpleModal') simpleModal!: SimpleModalComponent;

  @Output('emitSelectedDate') emitSelectedDate: EventEmitter<SelectedDate> =
    new EventEmitter<SelectedDate>();

  selectedDate: string = '';
  day: string = '';
  hour: string = '';

  constructor(private simpleModalService: SimpleModalService) {}

  ngAfterViewInit(): void {
    this.simpleModalService.setComponent(this.simpleModal);
  }

  close() {
    this.simpleModal.close();
  }

  schedule() {
    this.emitSelectedDate.emit({
      day: this.day,
      hour: this.hour,
    });

    this.simpleModal.close();
  }
}
