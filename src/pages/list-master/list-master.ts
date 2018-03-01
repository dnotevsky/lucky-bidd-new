import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams,  AlertController, LoadingController, Loading } from 'ionic-angular';

import { AuctionListItem } from '../../models/auction-list-item';
import { AuctionListItems } from '../../providers/providers';

import { showLoading, showError } from '../../utils/utils'

import moment from 'moment';
moment.locale('ru');

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  pageType: String;
  title: String;
  currentItems: AuctionListItem[];

  loading: Loading;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public items: AuctionListItems,
              public modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
    this.pageType = navParams.data
    if (this.pageType === 'new') {
      this.title = "Новые аукционы"
    }
    if (this.pageType === 'part') {
      this.title = "Участвую"
    }
    if (this.pageType === 'win') {
      this.title = "Выиграл"
    }
    if (this.pageType === 'lose') {
      this.title = "Проиграл"
    }
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    (async () => {
      try {
        this.loading = showLoading(this.loadingCtrl);
        var items = await this.items.query(this.pageType);
        for(var i in items) {
          var endDate = moment(items[i].zakupkiObject.endDate, 'DD.MM.YYYY HH:mm')
          items[i].zakupkiObject.endDateFormatted = endDate.format('DD MMM YYYY HH:mm')

          var originName = items[i].zakupkiObject.name
          var str = 'Закупка продукции: '
          var ind = originName.indexOf(str)
          if (ind !== -1) {
            items[i].zakupkiObject.name = originName.substr(str.length)
          } else {
            items[i].zakupkiObject.name = originName
          }
        }
        this.currentItems = items;
        this.loading.dismiss();
      } catch (err) {
        this.loading.dismiss();
        showError(err.message, this.alertCtrl)
      }
    })()
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: AuctionListItem) {
    this.navCtrl.push('AucPage', {
      auctionId: item.zakupkiObjectId
    });
  }

}
