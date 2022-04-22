import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-blog-posts-of-category',
  templateUrl: './blog-posts-of-category.component.html',
  styleUrls: ['./blog-posts-of-category.component.scss'],
})
export class BlogPostsOfCategoryComponent {
  config: any;
  itemsPerRow: any;
  rows: any;
  loading = true;
  id: any;
  tf: any;
  news: any[];
  new: any;
  value;
  category: string | null;
  newsOfCategory: any[];

  /**
   *
   * @param {ActivatedRoute} route
   * @param {Router} router
   * @param {AngularFirestore} afs
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.newsOfCategory = [];
    this.category = this.route.snapshot.paramMap.get('category');
    this.loadContent(this.category);
    this.config = {
      currentPage: 1,
      itemsPerPage: 2,
    };
    this.route.queryParamMap.pipe(map((params) => params.get('page')))
      .subscribe((page) => {
        this.config.currentPage = page
      }
    );
    this.loading = false;
    this.value = 0;
  }

  /**
   *
   * @param {string} category
   */
  loadContent(category: string | null) {
    this.afs
      .collection('news', (ref) => ref.where('category', '==', category))
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.newsOfCategory.push(doc.data());
        });
        this.itemsPerRow = 2;
        this.rows = Array.from(
          Array(Math.ceil(this.newsOfCategory.length / this.itemsPerRow)).keys()
        );
      });
    this.loading = false;
  }

  /**
   *
   * @param newPage
   */
  pageChange(newPage: number) {
    this.router.navigate(['news/categories'], {
      queryParams: { page: newPage },
    });
  }
}
