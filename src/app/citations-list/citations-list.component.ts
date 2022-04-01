import { Component, Input, OnInit } from '@angular/core';
import { ACSCitation, ACSConference, ACSPresentation } from '../acs-citation';
import { labelToColor } from '../colors-helper';

@Component({
  selector: 'app-citations-list',
  templateUrl: './citations-list.component.html',
  styleUrls: ['./citations-list.component.scss']
})
export class CitationsListComponent implements OnInit {


  @Input() acsBib: Array<ACSConference>;

  
  colors = labelToColor;

  selectedCitation: ACSCitation;
  onSelect(citation: ACSCitation):void {
    this.selectedCitation = citation;
  }




  isConference(citation: ACSConference) {
    return citation instanceof ACSConference;
  }

  isPresentation(citation: ACSPresentation) {
    return citation instanceof ACSPresentation;
  }

  constructor() {
    
   }


  ngOnInit(): void {
    console.log(this.acsBib)
  }

}




