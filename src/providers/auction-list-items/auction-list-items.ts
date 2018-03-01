import { Injectable } from '@angular/core';

import { AuctionListItem } from '../../models/auction-list-item';
import { Api } from '../api/api';

@Injectable()
export class AuctionListItems {
  items: AuctionListItem[] = [];
  
  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor(public api: Api) { }

  async query(filter: String) {
    let response = await this.api.get(`auctions?t=${filter}`);
    let items = response.data
    var auctions = []
    for (let item of items) {
      auctions.push(new AuctionListItem(item));
    }
    this.items = auctions
    return this.items;
  }

  add(item: AuctionListItem) {
  }

  delete(item: AuctionListItem) {
  }

}
