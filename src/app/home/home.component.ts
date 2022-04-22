import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faAngleDown = faAngleDoubleDown;
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


