import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationsMetricsComponent } from './citations-metrics.component';

describe('CitationsMetricsComponent', () => {
  let component: CitationsMetricsComponent;
  let fixture: ComponentFixture<CitationsMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationsMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitationsMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
