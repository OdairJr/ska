import { ElementRef, Injectable } from '@angular/core';
import {} from 'googlemaps';
import { Establishment } from '../models/establishment.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  private map?: google.maps.Map;

  constructor() { }

  public createMap(mapElement: ElementRef) {
    const mapProperties = {
      center: new google.maps.LatLng(-23.6824262, -46.6910678),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    if (mapElement) {
      this.map = new google.maps.Map(mapElement.nativeElement, mapProperties);
    }
  }

  private getLatLongFromAddress(address: string, callback: (latitude: number, longitude: number) => void) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results: any, status: string) {
      if (status === 'OK') {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
        callback(latitude, longitude);
      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  private addMarkerAndCenterMap(latitude: number, longitude: number) {
    if(!this.map) return;

    const marker = new google.maps.Marker();
    marker.setPosition(new google.maps.LatLng(latitude, longitude));
    marker.setMap(this.map);

    this.map.setCenter(new google.maps.LatLng(latitude, longitude));
  }

  public addMarkerToMap(establishment: Establishment) {
    if (!this.map) return;

    this.getLatLongFromAddress(establishment.address.street + ', ' + establishment.address.number + ', ' +
      establishment.address.neighborhood + ', ' + establishment.address.city + ', ' + establishment.address.state,
      (latitude, longitude) => {
        this.addMarkerAndCenterMap(latitude, longitude);
      });
  }
}
