import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SimpleModalService } from '../../services/simple-modal/simple-modal.service';
import { SimpleModalComponent } from '../simple-modal/simple-modal.component';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements AfterViewInit {
  @ViewChild('simpleModal') simpleModal!: SimpleModalComponent;

  constructor(private simpleModalService: SimpleModalService) {}

  ngAfterViewInit(): void {
    this.simpleModalService.setComponent(this.simpleModal);
  }

  sigin() {
    this.simpleModalService.getComponent().open();
  }
}
