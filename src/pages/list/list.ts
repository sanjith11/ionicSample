import { Component ,ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Clinic } from '../../app/Clinic'
import {ClinicService} from '../../app/ClinicService'
import { Nav, Platform } from 'ionic-angular';
import {MapPage} from '../map/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: Clinic;
  icons: string[];
  items: Array<Clinic>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public clinicService:ClinicService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.initItems()
  }

  initItems(){
    this.items = this.clinicService.getGPList();

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  openPage(item) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.navCtrl.setRoot("MapPage");
    this.navCtrl.push(MapPage,{
      item: item
    });

  }

  getItems(ev: any) {
    // Reset items back to all of the items
  this.initItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return ( item.clinicName.toUpperCase().indexOf(val.toUpperCase()) > -1);
      })
    }
  }
}
