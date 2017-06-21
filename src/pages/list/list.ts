import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clinic } from '../../app/Clinic'
import { ClinicService } from '../../app/ClinicService'
import { Nav, Platform } from 'ionic-angular';
import { MapPage } from '../map/map';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  title: string;
  icons: string[];
  items: Array<Clinic>;

  constructor(private callNumber: CallNumber,public navCtrl: NavController, public navParams: NavParams, public clinicService: ClinicService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.title = navParams.get('title');
    this.initItems(this.title)
  }

  initItems(title: string) {
    if (title == "GP Listing") {
      this.items = this.clinicService.getGPList();
    } else if (title == "Specialist Listing") {
      this.items = this.clinicService.getSpecialistList();
    } else {
      this.items = this.clinicService.getDentalList();
    }


  }

  callClinicNumber(event, item) {
   this.callNumber.callNumber(item.phoneNumber, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
  }
  openPage(item) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.navCtrl.setRoot("MapPage");
    this.navCtrl.push(MapPage, {
      item: item
    });

  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initItems(this.title);

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return ((item.clinicName.toUpperCase().indexOf(val.toUpperCase()) > -1) || (item.clinicAddress.toUpperCase().indexOf(val.toUpperCase()) > -1));
      })
    }
  }
}
