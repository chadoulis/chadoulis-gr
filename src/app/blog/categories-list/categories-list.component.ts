import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators'
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface BlogPost {
  title: string,
  synopsis: string,
  slug: string,
  body: [],
  date: Date,
  category: string
};
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  tf: any;
  new: any;
  news: any;
  loading:boolean;
  value: any;
  item$: Observable<BlogPost[]>;

  /**
   *
   * @param {BlogService} blogService
   */
  constructor(
    private firestore: Firestore
    ) {
      const c: any = collection(firestore, 'blog');
      this.item$ = collectionData(c);
      this.loadContent();
  }


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

  getCategoriesAndFrequencies(nnn: BlogPost[]) {
    const tagsArray = [];
    for (let entry of nnn) {
      tagsArray.push(entry.category);
    }
    return this.countFrequenciesFromArray(tagsArray);
  }

  loadContent() {
    this.loading = true;
    this.item$.subscribe((d)=>{
      this.news = d
      this.tf = this.getCategoriesAndFrequencies(this.news);
      this.loading = false;
      this.value = 0;
      console.log(this.tf)
    })
  }

  ngOnInit(): void {

  }
}
