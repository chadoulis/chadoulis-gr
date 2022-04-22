import { Component, ElementRef, Input, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ACS_REFERENCE_LIST } from '../../mock-acs-citations';
import { CategoryAxis, ValueAxis } from '@amcharts/amcharts4/charts';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {ACSConference, ACSPresentation} from '../../acs-citation';
import { labelToColor } from '../../colors-helper';

@Component({
  selector: 'app-citations-gauge',
  templateUrl: './citations-gauge.component.html',
  styleUrls: ['./citations-gauge.component.scss']
})
export class CitationsGaugeComponent implements OnInit, OnDestroy {


    // σαν το findElementById
    @ViewChild('chartDiv', {static: true}) chartDiv: ElementRef;
    @Input() bib: Array<Object>
    chart: any;
    constructor(protected zone: NgZone) { }


    lengthBib(obj: Object[]) {
      return Object.keys(obj).length;
    }



    percentageConference(obj: Object[]) {
      let counter = 0;
      for (let value of obj) {
        if (value instanceof ACSConference) {
          counter++;
        }
      }
      return (counter / this.lengthBib(this.bib)) * 100;
    }


    percentagePresentation(obj: Object[]) {
      let counter = 0;
      for (let value of obj) {
        if (value instanceof ACSPresentation) {
          counter++;
        }
      }
      return (counter / this.lengthBib(this.bib)) * 100;
    }


    ngAfterViewInit(): void {
      /* Chart code */
      // Themes begin

      am4core.useTheme(am4themes_animated);
      am4core.options.autoDispose = true;
      am4core.options.onlyShowOnViewport = false;

      // Themes end

      // Create chart instance
      let chart = this.zone.runOutsideAngular(() => {
        return am4core.create(this.chartDiv.nativeElement, am4charts.RadarChart);
      })
      this.chart = chart;
      // Add data





      if (this.percentageConference(this.bib)>0) {
        chart.data.push({
          "category": "Conferences",
          "value": this.percentageConference(this.bib),
          "full": 100
        })
      }


      if (this.percentagePresentation(this.bib)>0) {
        chart.data.push({
          "category": "Presentations",
          "value": this.percentageConference(this.bib),
          "full": 100
        })
      }

      // Make chart not full circle
      chart.startAngle = -90;
      chart.endAngle = 180;
      chart.innerRadius = am4core.percent(20);

      // Set number format
      chart.numberFormatter.numberFormat = "#.#'%'";

      // Create axes
      let categoryAxis = chart.yAxes.push(new CategoryAxis<am4charts.AxisRendererRadial>());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.grid.template.strokeOpacity = 0;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.labels.template.fontWeight = '500';
      categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
        // bail-out early / exit early
        if (!target.dataItem || !target.dataItem.dataContext) {
          return fill;
        }
        //return labelToColor[target.dataItem.dataContext['category']]
        return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
      });
      categoryAxis.renderer.minGridDistance = 10;

      let valueAxis = chart.xAxes.push(new ValueAxis<am4charts.AxisRendererCircular>());
      valueAxis.renderer.grid.template.strokeOpacity = 0;
      valueAxis.min = 0;
      valueAxis.max = 100;
      valueAxis.strictMinMax = true;

      // Create series
      let series1 = chart.series.push(new am4charts.RadarColumnSeries());
      series1.dataFields.valueX = "full";
      series1.dataFields.categoryY = "category";
      series1.clustered = false;
      series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
      series1.columns.template.fillOpacity = 0.08;
      //series1.columns.template.cornerRadiusTopLeft = 20;
      series1.columns.template.strokeWidth = 0;
      series1.columns.template.radarColumn.cornerRadius = 20;

      let series2 = chart.series.push(new am4charts.RadarColumnSeries());
      series2.dataFields.valueX = "value";
      series2.dataFields.categoryY = "category";
      series2.clustered = false;
      series2.columns.template.strokeWidth = 0;
      series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
      series2.columns.template.radarColumn.cornerRadius = 20;

      //series2.columns.template.adapter.add("fill", function (fill, target) {
        //return labelToColor[target.dataItem.dataContext['category']]
        //return chart.colors.getIndex(target.dataItem.index);
      //});

      // Add cursor
      chart.cursor = new am4charts.RadarCursor();

    }

    ngOnDestroy() {
      this.chart?.dispose();
    }

    ngOnInit() {

    }
  }
