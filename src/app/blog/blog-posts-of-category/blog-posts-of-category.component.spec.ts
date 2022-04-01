import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostsOfCategoryComponent } from './blog-posts-of-category.component';

describe('BlogPostsOfCategoryComponent', () => {
  let component: BlogPostsOfCategoryComponent;
  let fixture: ComponentFixture<BlogPostsOfCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostsOfCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostsOfCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
