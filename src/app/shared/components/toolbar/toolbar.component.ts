import { Component } from '@angular/core';
import { SimpleModalService } from '../../services/simple-modal/simple-modal.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private simpleModalService: SimpleModalService) {}

  sigin() {
    this.simpleModalService.getComponent().open();
  }
}
