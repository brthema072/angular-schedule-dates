import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDatePageComponent } from './schedule-date.page.component';

describe('ScheduleDatePageComponent', () => {
  let component: ScheduleDatePageComponent;
  let fixture: ComponentFixture<ScheduleDatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleDatePageComponent],
    });
    fixture = TestBed.createComponent(ScheduleDatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
