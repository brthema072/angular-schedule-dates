import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDaysViewComponent } from './monthly-days-view.component';

describe('MonthlyDaysViewComponent', () => {
  let component: MonthlyDaysViewComponent;
  let fixture: ComponentFixture<MonthlyDaysViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyDaysViewComponent],
    });
    fixture = TestBed.createComponent(MonthlyDaysViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
