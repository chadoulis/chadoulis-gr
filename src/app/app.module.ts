import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from '@angular/material/button/'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { ResearchComponent } from './research/research.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './articles/articles.component';
import { environment } from 'src/environments/environment';
import { CitationsComponent } from './citations/citations.component';
import { CitationsListComponent } from './citations-list/citations-list.component';
import { CitationsGaugeComponent } from './citations-gauge/citations-gauge.component';
import { CitationsMetricsComponent } from './citations-metrics/citations-metrics.component';
import { WebdevPortfolioComponent } from './webdev-portfolio/webdev-portfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
// import { CitationsGaugeComponent } from './citations-gauge/citations-gauge.component';
// import { CitationsListComponent } from './citations-list/citations-list.component';
// import { CitationsMetricsComponent } from './citations-metrics/citations-metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TimelineComponent,
    HomeComponent,
    JumbotronComponent,
    PodcastsComponent,
    ResearchComponent,
    FooterComponent,
    ArticlesComponent,
    CitationsComponent,
    CitationsGaugeComponent,
    CitationsListComponent,
    CitationsMetricsComponent,
    WebdevPortfolioComponent,
    BlogPostPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {

}
