import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Clinic } from '../../app/Clinic'
import {GeocodeService} from '../../app/GeocodeService'
import {Observable,Subscriber} from 'rxjs/Rx';
 
@Component({
  selector: 'Map-Page',
  templateUrl: 'map.html'
})

export class MapPage {

selectedItem: Clinic;
  lat: number;
  lng: number;
  zoom: number = 14;
 constructor(public navParams: NavParams,private geocodeService:GeocodeService ) {
  this.selectedItem = navParams.get('item');
   this.geocodeService.getLatLongForAddress(this.selectedItem.clinicAddress).subscribe((result)=>{

    this.lat = result.results[0].geometry.location.lat;
    this.lng=result.results[0].geometry.location.lng;


   });
 }


ngAfterViewInit() {

}



}