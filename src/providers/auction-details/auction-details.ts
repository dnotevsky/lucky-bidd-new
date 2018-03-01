import { Injectable } from '@angular/core';

import { Api } from '../api/api';

/*
  Generated class for the AuctionDetailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuctionDetailsProvider {

  constructor(public api: Api) {
  }

  async query(auctionId: Number) {
    let response = await this.api.get(`auction-details?id=${auctionId}`);
    return response.data
  }

}
