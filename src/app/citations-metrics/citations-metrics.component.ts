import { Component, Input, OnInit } from '@angular/core';
import { ACS_REFERENCE_LIST } from '../mock-acs-citations'

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-citations-metrics',
  templateUrl: './citations-metrics.component.html',
  styleUrls: ['./citations-metrics.component.scss']
})
export class CitationsMetricsComponent implements OnInit {

  bib = ACS_REFERENCE_LIST
  
  
  constructor() { 

  }

  
  ngOnInit(): void {
  }

}





