import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvPageComponent } from './cv-page/cv-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DownloadCvComponent } from './download-cv/download-cv.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { getSaver, SAVER } from './saver.provider';
import { FileSaverModule } from 'ngx-filesaver';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    CvPageComponent,
    DownloadCvComponent,
    CvSectionComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    MatIconModule,
    MatButtonModule,
    FileSaverModule,
    RouterModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    {
     provide: SAVER, useFactory: getSaver
    },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class CvModule { }
