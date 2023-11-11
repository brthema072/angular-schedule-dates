import { Injectable, WritableSignal, signal } from '@angular/core';
import { toggleOption } from '../../components/simple-toggle/simple-toggle.component';

@Injectable({
  providedIn: 'root',
})
export class SimpleToggleService {
  toggleSelected: WritableSignal<toggleOption> = signal({} as toggleOption);

  changeToggleSelected(option: toggleOption) {
    this.toggleSelected.set(option);
  }
}
