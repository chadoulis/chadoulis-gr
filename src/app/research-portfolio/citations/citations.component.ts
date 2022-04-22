import { Component, Input, OnInit } from '@angular/core';
import {ACSConference} from '../../acs-citation';

@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.scss']
})
export class CitationsComponent implements OnInit {

  @Input() acsBib: Array<ACSConference>;
  ;

  constructor() { }

  ngOnInit(): void {

  }

}
