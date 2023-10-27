import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScheduleDateComponent } from './modal-schedule-date.component';

describe('ModalScheduleDateComponent', () => {
  let component: ModalScheduleDateComponent;
  let fixture: ComponentFixture<ModalScheduleDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalScheduleDateComponent],
    });
    fixture = TestBed.createComponent(ModalScheduleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
