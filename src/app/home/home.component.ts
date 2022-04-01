import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

}


