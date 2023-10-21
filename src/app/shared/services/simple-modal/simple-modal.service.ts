import { Injectable } from '@angular/core';
import { SimpleModalComponent } from '../../components/simple-modal/simple-modal.component';

@Injectable({
  providedIn: 'root',
})
export class SimpleModalService {
  simpleModal!: SimpleModalComponent;

  setComponent(modal: SimpleModalComponent) {
    this.simpleModal = modal;
  }

  getComponent(): SimpleModalComponent {
    return this.simpleModal;
  }
}
