import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { WebdevPortfolioComponent } from './webdev-portfolio/webdev-portfolio.component';

const routes: Routes = [

  {path: 'timeline', component: TimelineComponent},
  {
    path: 'research',
    loadChildren: () => import('./research-portfolio/research-portfolio.module').then(m => m.ResearchPortfolioModule)
  },
  {path: 'articles', component: ArticlesComponent},
  {path: 'portfolio', component: WebdevPortfolioComponent},
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '',
    loadChildren: () => import('./cv/cv.module').then(m => m.CvModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
