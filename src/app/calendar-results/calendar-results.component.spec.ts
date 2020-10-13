import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarResultsComponent } from './calendar-results.component';

describe('CalendarResultsComponent', () => {
  let component: CalendarResultsComponent;
  let fixture: ComponentFixture<CalendarResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
