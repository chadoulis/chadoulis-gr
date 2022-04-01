import { Component, Input, OnInit } from '@angular/core';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.scss']
})
export class BlogPostPreviewComponent implements OnInit {

  faAngleDoubleRight: any = faAngleDoubleRight;
  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.post)
  }

}
