import { Component, OnInit } from '@angular/core';
import { ACS_REFERENCE_LIST } from '../../mock-acs-citations';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {


  bibliography: any = ACS_REFERENCE_LIST;

  constructor() { }

  ngOnInit(): void {

  }

}
