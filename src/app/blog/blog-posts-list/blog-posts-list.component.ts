import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import {map} from 'rxjs/operators'
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface SortingCriterion {
  value: string;
  viewValue: string;
}

interface BlogPost {
  title: string,
  synopsis: string,
  slug: string,
  body: [],
  date: Date,
  category: string
};

@Component({
  selector: 'app-blog-posts-list',
  templateUrl: './blog-posts-list.component.html',
  styleUrls: ['./blog-posts-list.component.scss']
})
export class BlogPostsListComponent implements OnInit {

    faAngleDoubleRight = faAngleDoubleRight; // Icon
    config: any; // Pagination configuration
    news: BlogPost[]; // The Array of news that is going to be populated by firebase
    sortingCriteria: SortingCriterion[] = [
      {value: 'Date', viewValue: 'Date'},
      {value: 'Title', viewValue: 'Title'},
    ];
    selectedSortingCriterion = this.sortingCriteria[0].value;
    item$: Observable<BlogPost[]>;
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      firestore: Firestore
      ) {
    const c: any = collection(firestore, 'blog');
     this.item$ = collectionData(c);

      this.config = {
        currentPage: 1,
        itemsPerPage: 3
      };

      this.route.queryParamMap.pipe(
        map(params => params.get('page')))
        .subscribe(page => this.config.currentPage = page);
    }

    /**
     *
     * @param {Event} event
     */
    selectSortingCriterion(event: Event) {
      this.selectedSortingCriterion = (event.target as HTMLSelectElement).value;
      if ((event.target as HTMLSelectElement).value === 'Date'){
        this.news = this.news.slice().sort((a:any, b:any) => b.date - a.date)
      } else if ((event.target as HTMLSelectElement).value === 'Title'){
        this.news = this.news.slice().sort((a:any, b:any) => a.title.localeCompare(b.title))
      }
    }

    /**
     *
     * @param {number} newPage
     */
    pageChange(newPage: number) {
      this.router.navigate(['news'], { queryParams: { page: newPage } });
    }

    ngOnInit(): void {
      this.item$.subscribe((d)=>{
        this.news = d
      })


    }
  }








