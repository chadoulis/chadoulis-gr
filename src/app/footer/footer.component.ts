import { Component, OnInit } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faLinkedin: any = faLinkedin
  faYoutube: any = faYoutube
  faTwitter: any = faTwitter
  faFacebook: any = faFacebook
  constructor() { }

  ngOnInit(): void {
  }

}
