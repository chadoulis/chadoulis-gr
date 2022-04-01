import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationsGaugeComponent } from './citations-gauge.component';

describe('CitationsGaugeComponent', () => {
  let component: CitationsGaugeComponent;
  let fixture: ComponentFixture<CitationsGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationsGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitationsGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
