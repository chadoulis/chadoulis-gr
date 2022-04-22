import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOpinionComponent } from './blog-opinion.component';

describe('BlogOpinionComponent', () => {
  let component: BlogOpinionComponent;
  let fixture: ComponentFixture<BlogOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
