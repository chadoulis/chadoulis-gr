import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchPortfolioPageComponent } from './research-portfolio-page.component';

describe('ResearchPortfolioPageComponent', () => {
  let component: ResearchPortfolioPageComponent;
  let fixture: ComponentFixture<ResearchPortfolioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchPortfolioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchPortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
