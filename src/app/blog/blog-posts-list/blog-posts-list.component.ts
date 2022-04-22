import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { BlogService } from '../blog.service';
import { map } from 'rxjs/operators';
import { MatRadioChange } from '@angular/material/radio';


interface SortingCriterion {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-blog-posts-list',
  templateUrl: './blog-posts-list.component.html',
  styleUrls: ['./blog-posts-list.component.scss']
})
export class BlogPostsListComponent implements OnInit {

  filter: any;
    faAngleDoubleRight = faAngleDoubleRight; // Icon
    config: any; // Pagination configuration
    news: any[]; // The Array of news that is going to be populated by firebase
    sortingCriteria: SortingCriterion[] = [
      {value: 'Date', viewValue: 'Date'},
      {value: 'Title', viewValue: 'Title'},
    ];
    selectedSortingCriterion = this.sortingCriteria[0].value;

    /**
     *
     * @param {ActivatedRoute} route
     * @param {Router} router
     * @param {BlogService} blogService
     */
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      public blogService: BlogService
      ) {
      this.config = {
        currentPage: 1,
        itemsPerPage: 3
      };

      this.route.queryParamMap.pipe(map(params => params.get('page')))
      .subscribe((page) => {
        this.config.currentPage = page;
      })
    }

    /**
     *
     * @param {Event} event
     */
    selectSortingCriterion(event: Event) {
      this.selectedSortingCriterion = (event.target as HTMLSelectElement).value;
      if ((event.target as HTMLSelectElement).value === 'Date'){
        this.news = this.news.slice().sort((a: any, b: any) => b.date - a.date)
      } else if ((event.target as HTMLSelectElement).value === 'Title'){
        this.news = this.news.slice().sort((a: any, b: any) => a.title.localeCompare(b.title))
      }
    }

    /**
     *
     * @param {number} newPage
     */
    pageChange(newPage: number) {
      this.router.navigate(['blog'], { queryParams: { page: newPage } });
    }

    radioChange(event: MatRadioChange) {
      this.blogService.getBlogPostsByLanguage(event.value).subscribe(res => {
        this.news = res.map( e => {
          return e.payload.doc.data()
        })
        this.news = this.news.slice().sort((a, b) => b.date - a.date)
      });
  }



    /**
     *
     */
    ngOnInit(): void {
      this.blogService.getBlogPostsByLanguage('english').subscribe(res => {
        this.news = res.map( e => {
          return e.payload.doc.data()
        })
        this.news = this.news.slice().sort((a, b) => b.date - a.date)
      });
    }
  }
