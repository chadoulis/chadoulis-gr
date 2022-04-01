import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import {map} from 'rxjs/operators'
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface BlogPost {
  title: string,
  synopsis: string,
  slug: string,
  body: [],
  date: any
};

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {


  faTags = faTags;
  new: any;
  news: any;
  router: any;
  value = 0;
  loading = true;
  item$: Observable<BlogPost[]>;
  /**
   *
   * @param {ActivatedRoute} route
   * @param {BlogService} blogService
   */
  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore
    ) {
    const slug = this.route.snapshot.paramMap.get('slug');
    const c: any = collection(firestore, 'blog');
    this.item$ = collectionData(c)

    this.item$.subscribe((d)=>{
      d.forEach((dd)=>{
        if (dd.slug === slug) {
          this.new = dd
        }
      })
    })
    this.loading = false;
  }

  /**
   * Given the slug, returns the corresponding article
   * @param {string | null} slug
   */
  loadContent(slug: string | null) {
    this.loading = true;
    this.new = this.item$.subscribe((d)=>{
      d.forEach((dd)=>{
        if (dd.slug === slug) {
          debugger
          return dd
        }
      })
    })
  }
}


