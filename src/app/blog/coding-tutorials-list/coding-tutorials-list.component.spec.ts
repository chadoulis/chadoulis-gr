import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingTutorialsListComponent } from './coding-tutorials-list.component';

describe('CodingTutorialsListComponent', () => {
  let component: CodingTutorialsListComponent;
  let fixture: ComponentFixture<CodingTutorialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingTutorialsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingTutorialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
