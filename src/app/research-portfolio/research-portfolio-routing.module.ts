import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchPortfolioPageComponent } from './research-portfolio-page/research-portfolio-page.component';

const routes: Routes = [
  {
    path: '',
    component: ResearchPortfolioPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchPortfolioRoutingModule {}
