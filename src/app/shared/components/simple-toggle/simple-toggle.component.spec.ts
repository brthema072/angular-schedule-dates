import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleToggleComponent } from './simple-toggle.component';

describe('SimpleToggleComponent', () => {
  let component: SimpleToggleComponent;
  let fixture: ComponentFixture<SimpleToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleToggleComponent]
    });
    fixture = TestBed.createComponent(SimpleToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
