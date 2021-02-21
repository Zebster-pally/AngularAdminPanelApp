import { ElementRef, Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

export class MapService {

  private readonly yellowMark: string = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png';
  private readonly greenMark: string = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png';

  private readonly markers = [
    [-0.1244324, 51.5006728, "Big Ben"],
    [-0.119623, 51.503308, "London Eye"],
    [-0.1279688, 51.5077286, "Nelson's Column"],
    [-0.1444324, 51.6006728, "Somethings"],
    [-0.129623, 51.5803308, "Somethings"],
    [-0.1299688, 51.5077286, "Somethings"],
    [-0.1334324, 51.5006728, "Somethings"],
    [-0.122623, 51.503308, "Somethings"],
    [-0.1219688, 51.5077286, "Somethings"],
    [-0.1374324, 51.5006728, "Somethings"],
    [-0.139623, 51.503308, "Somethings"],
    [-0.1419688, 51.5077286, "Somethings"],
    [-0.1424324, 51.5006728, "Somethings"],
    [-0.146623, 51.503308, "Somethings"],
    [-0.14489688, 51.5077286, "Somethings"],
    [-0.1506623, 52.503308, "Somethings"],
    [-0.14489688, 54.5077286, "Somethings"],
    [-0.146623, 48.503308, "Somethings"],
    [-0.14489688, 49.5077286, "Somethings"]
  ];

  initMap(map: L.Map): void {
    map = L.map('map', {
      zoom: 5,
      maxZoom: 20
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(map);
    let london = new L.LatLng(51.5056, -0.1303);
    map.setView(london, 15);

    let defaultIcon = new L.Icon({
      iconUrl: this.greenMark,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    for (let i = 0; i < this.markers.length; i++) {
      const lon = this.markers[i][0];
      const lat = this.markers[i][1];
      const popupText = this.markers[i][2];
      const markerLocation = new L.LatLng(lat, lon);
      const marker = new L.Marker(markerLocation, { icon: defaultIcon });
      map.addLayer(marker);
      marker.bindPopup(popupText);
    }
  }

  toggleMarker(elementRef: ElementRef): void {
    const markers: Array<HTMLElement> = Array.from(elementRef.nativeElement.getElementsByClassName('leaflet-marker-icon'));
    for (const el of markers) {
      el.onclick = () => this.markerToggleHandler(el)
    }
  }

  private markerToggleHandler(element: HTMLElement): void {
    if (element.getAttribute('src') === this.yellowMark) {
      element.setAttribute('src', this.greenMark);
    } else {
      element.setAttribute('src', this.yellowMark);
    }
  }

}
