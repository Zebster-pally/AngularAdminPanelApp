import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { MapService } from '../shared/services/map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit {

  private map: L.Map;

  constructor(private elementRef: ElementRef, private mapService: MapService) { }

  ngAfterViewInit(): void {
    this.mapService.initMap(this.map);
    this.mapService.toggleMarker(this.elementRef)
  }

}
