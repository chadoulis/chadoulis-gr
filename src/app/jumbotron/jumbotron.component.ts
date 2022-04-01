import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  section: string = ''
  backclass: string = ''
  id: string = ''
  imgURL: string = ''
  cover: string = ''
  height: string = ''
  position: string = ''

  constructor(router:Router) {

    router.events.forEach((event) => {

      if(event instanceof NavigationStart) {
        this.section = event.url;
        if (this.section === '/timeline') {
          this.imgURL =  '/assets/images/covers/111.jpg'
          this.cover = 'cover'
          this.height = '400'
          this.position = 'left'
        }
        if (this.section === '/') {
          this.imgURL =  '/assets/images/covers/0000.png'
          this.cover='cover'
          this.height = '200'
          this.position = 'right'
        }
        if (this.section === '/blog') {
          this.imgURL =  '/assets/images/covers/55.jpeg'
          this.cover='cover'
          this.height = '200'
          this.position = 'left'
        }
        if (this.section === '/portfolio') {
          this.imgURL =  '/assets/images/covers/222.jpeg'
          this.cover='cover'
          this.height = '200'
          this.position = 'left'
        }
        if (this.section === '/contact') {
          this.imgURL =  '/assets/images/covers/77.jpeg'
          this.cover='cover'
          this.height = '200'
          this.position = 'left'
        }
        if (this.section === '/research') {
          this.imgURL =  '/assets/images/covers/44.jpeg'
          this.cover='cover'
          this.height = '200'
          this.position = 'center'
        }
        if (this.section === '/podcasts') {
          this.imgURL =  '/assets/images/covers/66.jpeg'
          this.cover='cover'
          this.height = '400'
          this.position = 'center'
        }
      }
    });
  }




  ngOnInit(): void {

  }

}
