import { Component, OnInit } from '@angular/core';
import { fa500px, faAngular, faGithub, faPython} from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { PROJECTS } from '../mock-projects';
@Component({
  selector: 'app-webdev-portfolio',
  templateUrl: './webdev-portfolio.component.html',
  styleUrls: ['./webdev-portfolio.component.scss']
})
export class WebdevPortfolioComponent implements OnInit {

  faResearchgate: any = faBookOpen;
  faGithub: any = faGithub;
  faPython: any = faPython;
  faAngular: any = faAngular;
  faGlobe: any = faGlobe;
  fa500px = fa500px
  partners=PROJECTS
  constructor() { }

  ngOnInit(): void {
  }

}
