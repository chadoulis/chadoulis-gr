
import { Component, Inject, Input, OnInit } from '@angular/core';
import { DownloadService } from '../download.service'
import { Download } from '../download'
import { Observable } from 'rxjs'
import { DOCUMENT } from '@angular/common'
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';

@Component({
  selector: 'app-download-cv',
  templateUrl: './download-cv.component.html',
  styleUrls: ['./download-cv.component.scss']
})
export class DownloadCvComponent implements OnInit  {


  n: string;
  u: string;
  slides: any;

  download$: Observable<Download>

  /**
   *
   * @param {DownloadService} downloads
   * @param {Document} document
   * @param {analytics} analytics
   */
  constructor(
    private downloads: DownloadService,
    @Inject(DOCUMENT) public document: Document,
    private analytics: AngularFireAnalytics
    ) {
    }


  /**
   *
   * @param param0
   */
  download({name, url}: {name: string, url: string}) {
    this.analytics.logEvent('file_download', { event_name: 'download', filename: name});
    this.downloads.download(url, name).subscribe();
  }

  /**
   *
   */
  ngOnChange() {
    this.n = 'chadoulis_cv.pdf'
    this.u = 'assets/images/chadoulis_cv.pdf'
    this.slides = {name: this.n, url: this.u}
  }

  /**
   *
   */
  ngOnInit() {

    this.n = 'chadoulis_cv.pdf'
    this.u = 'assets/images/chadoulis_cv.pdf'
    this.slides = {name: this.n, url: this.u}
  }
}
