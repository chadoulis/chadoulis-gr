import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { ResearchComponent } from './research/research.component';
import { TimelineComponent } from './timeline/timeline.component';
import { WebdevPortfolioComponent } from './webdev-portfolio/webdev-portfolio.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'podcasts', component: PodcastsComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'portfolio', component: WebdevPortfolioComponent},
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  //{path: 'citations', component: CitationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
