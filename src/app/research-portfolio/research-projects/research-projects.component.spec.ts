import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectsComponent } from './research-projects.component';

describe('ResearchProjectsComponent', () => {
  let component: ResearchProjectsComponent;
  let fixture: ComponentFixture<ResearchProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
