import { Component, OnInit } from '@angular/core';
import { ACS_REFERENCE_LIST } from '../mock-acs-citations';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  bibliography: any = ACS_REFERENCE_LIST;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
