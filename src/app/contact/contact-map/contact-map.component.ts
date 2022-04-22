import { Component, Input, OnChanges,AfterViewInit } from '@angular/core';
import { latLng, tileLayer, icon } from 'leaflet';
import { environment } from '../../../environments/environment';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';


@Component({
  selector: 'app-contact-map',
  template: `
  <div class="rounded" id="map"></div>
  `,
  styleUrls: ['./contact-map.component.scss']
})
export class ContactMapComponent implements AfterViewInit {



  map: any;
  options = {};
  layers = [];
  icon = icon({
    iconUrl: 'assets/images/marker-icon.png',
    shadowUrl: 'assets/images/marker-shadow.png',
  });

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private loadMap(): void {
    this.map = L.map('map').setView([40.568242226985184, 22.99732492926281], 14);
    L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${environment.mapbox.accessToken}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(this.map);
    L.marker([40.568242226985184, 22.99732492926281]).addTo(this.map);

  }
}
