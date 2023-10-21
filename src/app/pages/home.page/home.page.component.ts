import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SimpleModalComponent } from 'src/app/shared/components/simple-modal/simple-modal.component';
import { SimpleModalService } from 'src/app/shared/services/simple-modal/simple-modal.service';

@Component({
  selector: 'home.page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('simpleModal') simpleModal!: SimpleModalComponent;

  constructor(private simpleModalService: SimpleModalService) {}

  ngAfterViewInit(): void {
    this.simpleModalService.setComponent(this.simpleModal);
  }
}
