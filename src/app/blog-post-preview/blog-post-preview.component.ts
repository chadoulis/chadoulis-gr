import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.scss']
})
export class BlogPostPreviewComponent implements OnInit {

  faArrowRight: any = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}
