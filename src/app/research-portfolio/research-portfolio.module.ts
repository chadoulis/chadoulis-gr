import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications/publications.component';
import { ResearchProjectsComponent } from './research-projects/research-projects.component';
import { ResearchPortfolioPageComponent } from './research-portfolio-page/research-portfolio-page.component';
import { ResearchPortfolioRoutingModule } from './research-portfolio-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CitationsComponent } from './citations/citations.component';
import { CitationsListComponent } from './citations-list/citations-list.component';
import { CitationsMetricsComponent } from './citations-metrics/citations-metrics.component';
import { CitationsGaugeComponent } from './citations-gauge/citations-gauge.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PublicationsComponent,
    ResearchProjectsComponent,
    ResearchPortfolioPageComponent,
    CitationsComponent,
    CitationsListComponent,
    CitationsMetricsComponent,
    CitationsGaugeComponent
  ],
  imports: [
    CommonModule,
    ResearchPortfolioRoutingModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    ResearchPortfolioPageComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class ResearchPortfolioModule { }
