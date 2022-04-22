import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogJumbotronComponent } from './blog-jumbotron.component';

describe('BlogJumbotronComponent', () => {
  let component: BlogJumbotronComponent;
  let fixture: ComponentFixture<BlogJumbotronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogJumbotronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
