import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearViewComponent } from './year-view.component';

describe('YearViewComponent', () => {
  let component: YearViewComponent;
  let fixture: ComponentFixture<YearViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearViewComponent]
    });
    fixture = TestBed.createComponent(YearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
