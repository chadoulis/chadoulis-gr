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
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticlesComponent } from './articles/articles.component';
import { environment } from 'src/environments/environment';
import { WebdevPortfolioComponent } from './webdev-portfolio/webdev-portfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ResearchPortfolioModule } from './research-portfolio/research-portfolio.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contact/contact.module';
import { AngularFireModule } from '@angular/fire/compat';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import {MatIconModule} from '@angular/material/icon'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CvModule } from './cv/cv.module';
import { NewsModule } from './news/news.module';
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
    FooterComponent,
    ArticlesComponent,
    WebdevPortfolioComponent,
    BlogPostPreviewComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    CommonModule,
    FontAwesomeModule,
    ResearchPortfolioModule,
    RouterModule,
    ContactModule,
    RecaptchaV3Module,
    FontAwesomeModule,
    MatIconModule,
    CvModule,
    NewsModule
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
  providers:[
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey
    },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {

}
