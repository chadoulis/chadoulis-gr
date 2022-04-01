import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { BlogPostsListComponent } from './blog-posts-list/blog-posts-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostsOfCategoryComponent } from './blog-posts-of-category/blog-posts-of-category.component';
import { MatInputModule } from '@angular/material/input';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';



@NgModule({
  declarations: [
    CategoriesListComponent,
    BlogPostComponent,
    BlogPostsListComponent,
    BlogPostPreviewComponent,
    BlogPostsOfCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatSelectModule,
    BlogRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFirestoreModule,
  ],
  exports: [
    BlogPostsListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
})
export class BlogModule { }
