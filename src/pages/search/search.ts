import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuctionListItem } from '../../models/auction-list-item';
import { AuctionListItems } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: AuctionListItems) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    // this.currentItems = this.items.query({
    //   name: val
    // });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: AuctionListItem) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
