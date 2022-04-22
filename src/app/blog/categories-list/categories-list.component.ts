import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  tf: any;
  new: any;
  news: any[];
  loading: boolean;
  value: number;

  /**
   *
   * @param {BlogService} blogService
   */
  constructor(
    private blogService: BlogService
    ) {
    this.loadContent();
  }

  /**
   * A function that given an array, returns the absolute frequencies of its members
   * @param arr
   * @returns
   */
  countFrequenciesFromArray(arr: any[]) {
    var a = [],
      b = [],
      prev;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== prev) {
        a.push(arr[i]);
        b.push(1);
      } else {
        b[b.length - 1]++;
      }
      prev = arr[i];
    }
    return [a, b];
  }

  /**
   *
   * @param blogposts
   * @returns
   */
  getCategoriesAndFrequencies(blogposts: any[]) {
    const tagsArray = [];
    for (let entry of blogposts) {
      tagsArray.push(entry.category);
    }
    return this.countFrequenciesFromArray(tagsArray);
  }

  /**
   *
   */
  loadContent() {
    this.loading = true;
    this.news = [];
    this.blogService.getBlogPosts().subscribe((res) => {
      this.news = res.map((e) => {
        return e.payload.doc.data();
      });
      this.tf = this.getCategoriesAndFrequencies(this.news);
      this.loading = false;
      this.value = 0;
    });
  }

  ngOnInit(): void {
    this.news = [];
  }
}
