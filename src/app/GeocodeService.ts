
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class GeocodeService { 
 constructor(private http:Http) { 


  }


  getLatLongForAddress(address:String):Observable<any>{

    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key=AIzaSyAxHnEqRho9xD6AV4ZHGYiHvR0tAEXasgY")
    .map(response => response.json())
    ;

  }

}