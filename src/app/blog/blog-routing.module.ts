
import { NgModule } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostsOfCategoryComponent } from './blog-posts-of-category/blog-posts-of-category.component';
import { BlogPostsListComponent } from './blog-posts-list/blog-posts-list.component';
import { BlogJumbotronComponent } from './blog-jumbotron/blog-jumbotron.component';
import { BlogOpinionComponent } from './blog-opinion/blog-opinion.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogPostsListComponent,
        data: {
          seo: {
            title: 'WQeMS | News',
            metaTags: [
              { name: 'description', content: 'Pilot Areas' },
              { property: 'og:title', content: 'WQeMS | Pilot Areas' },
              { proprety: 'og:description', content: 'Pilot Areas' },
              { property: 'og:image', content: 'https://ibb.co/sv7MmBf' }
            ]
          }
        },
      },
      {
        path: 'opinion',
        component: BlogOpinionComponent
      },
      {
        path: 'opinion/:slug',
        component: BlogPostComponent
      },
      {
        path: ':slug',
        component: BlogPostComponent
      },
      {
        path: 'categories/:category',
        component: BlogPostsOfCategoryComponent
      },

    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}


