import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevPortfolioComponent } from './webdev-portfolio.component';

describe('WebdevPortfolioComponent', () => {
  let component: WebdevPortfolioComponent;
  let fixture: ComponentFixture<WebdevPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdevPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdevPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
