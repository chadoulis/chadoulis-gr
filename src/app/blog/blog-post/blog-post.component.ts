import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { BlogService } from '../blog.service';

/**
 * A blog post.
 */
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {

  tf: any;
  faTags = faTags;
  new: any;
  news: any[];
  router: any;
  value = 0;
  loading = true;

  /**
   *
   * @param {ActivatedRoute} route
   * @param {BlogService} blogService
   */
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
    ) {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.loadContent(slug);
  }

  /**
   * Given the slug, returns the corresponding article
   * @param {string} slug
   */
  loadContent(slug: string | null) {
    this.loading = true;
    this.blogService.getBlogPostBySlug(slug).subscribe(res => {
      this.news = res.map( e => {
        return e.payload.doc.data()
      })
      this.new = this.news[0]
      this.loading = false;
    });
  }

  r(code: string){
    return `https://www.thiscodeworks.com/embed/${code}`
  }
}
