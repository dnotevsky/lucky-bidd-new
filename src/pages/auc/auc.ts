import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController, LoadingController, Loading } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import moment from 'moment'

// import { Settings } from '../../providers/providers';
import { AuctionDetailsProvider } from '../../providers/providers';
import { AuctionDetails } from '../../models/auction-details';
import { Api } from '../../providers/api/api';

import { showLoading, showError } from '../../utils/utils'

/**
 * Generated class for the AucPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auc',
  templateUrl: 'auc.html',
})
export class AucPage {
  auctionDetails: AuctionDetails;
  isPart: Boolean;
  isActiveAuction: Boolean;
  name: String;
  supplyDescription: String;
  projectDescriptionLink: string;
  startDate: moment.Moment
  endDate: moment.Moment;
  nowDate: moment.Moment;
  barWidth: Number = 0;
  endTimeRemainingFormatted: String;
  lastBetSupplierName: String;
  startCost: Number;
  lastBetCost: Number;
  companyName: String;
  maxDays: Number;

  title: String;
  auctionId: Number;
  showMinCostDialog: Boolean = false;
  minCost: Number;

  loading: Loading;

  constructor(public navCtrl: NavController,
              public auctionDetailsProvider: AuctionDetailsProvider,
              public navParams: NavParams,
              public api: Api,
              private iab: InAppBrowser,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
      this.title = navParams.get('title')
      this.auctionId = navParams.get('auctionId')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AucPage');
  }

  ionViewDidEnter() {
    this.loading = showLoading(this.loadingCtrl);
    (async () => {
      this.auctionDetails = new AuctionDetails(await this.auctionDetailsProvider.query(this.auctionId));

      this.isPart = this.auctionDetails.isPart
      this.minCost = this.auctionDetails.minCost
      this.isActiveAuction = this.auctionDetails.zakupkiObjectDetails.state.id === 19000002

      var originName = this.auctionDetails.zakupkiObjectDetails.name
      var str = 'Закупка продукции: '
      var ind = originName.indexOf(str)
      if (ind !== -1) {
        this.name = originName.substr(str.length)
      } else {
        this.name = originName
      }

      this.supplyDescription = this.auctionDetails.descriptionCleaned
      this.projectDescriptionLink = this.auctionDetails.projectDescriptionLink
      
      this.startDate = moment(this.auctionDetails.zakupkiObjectDetails.startDate + " +0300", 'DD.MM.YYYY HH:mm:SS Z')
      this.endDate = moment(this.auctionDetails.zakupkiObjectDetails.endDate + " +0300", 'DD.MM.YYYY HH:mm:SS Z')
      this.recalcReminingTime()
      setInterval(x => {
        this.recalcReminingTime()
      }, 1000)
      
      var lastBetSupplier = this.auctionDetails.zakupkiObjectDetails.lastBetSupplier
      if (lastBetSupplier !== null) {
        this.lastBetSupplierName = lastBetSupplier.company.name
      }
      this.startCost = this.auctionDetails.zakupkiObjectDetails.startCost
      this.lastBetCost = this.auctionDetails.zakupkiObjectDetails.lastBetCost
      this.companyName = this.auctionDetails.zakupkiObjectDetails.company.name
      this.maxDays = this.auctionDetails.zakupkiObjectDetails.maxDays

      console.log(this.auctionDetails.zakupkiObjectDetails.name)
      this.loading.dismiss();
    })()
  }

  recalcReminingTime() {
    this.nowDate = moment(Date.now())
    var endDaysRemaining = this.endDate.diff(this.nowDate, 'days')
    var hoursRemaining = this.endDate.diff(this.nowDate, 'hours') - endDaysRemaining * 24
    var minutesRemaining = this.endDate.diff(this.nowDate, 'minutes') - (endDaysRemaining * 24 + hoursRemaining) * 60
    var secondsRemaining = this.endDate.diff(this.nowDate, 'seconds') - ((endDaysRemaining * 24 + hoursRemaining) * 60 + minutesRemaining) * 60
    var timeRemaining = moment().set({'hour': hoursRemaining, 'minute': minutesRemaining, 'second': secondsRemaining})
    var endTimeRemaining = `${timeRemaining.format('HH:mm:ss')}`

    if (this.startDate && this.endDate) {
      var width = Math.floor((this.nowDate.diff(this.startDate, 'seconds') / this.endDate.diff(this.startDate, 'seconds')) * 100)
      if (width > 100) {
        width = 100
      }
      if (width < 0) {
        width = 0
      }
      this.barWidth = width
      console.log(this.barWidth)
    } else {
      this.barWidth = 0
    }
    
    this.endTimeRemainingFormatted = ''
    if (endDaysRemaining !== 0) {
      this.endTimeRemainingFormatted = `${endDaysRemaining} дней `
    }
    this.endTimeRemainingFormatted += `${endTimeRemaining}`
}

  acceptMinCost() {
    (async () => {
      let data = {
        id: this.auctionDetails.zakupkiObjectDetails.id,
        min_cost: this.minCost
      }
      const response = await this.api.post(`join`, data)
      if (response.data.success === true) {
        this.isPart = true
      }
      this.showMinCostDialog = false
    }) ()
  }
  
  refuseAuction() {
    (async () => {
      let data = {
        id: this.auctionDetails.zakupkiObjectDetails.id
      }
      const response = await this.api.post(`reject`, data)
      if (response.data.success === true) {
        this.isPart = false
      }
    }) ()
  }

  openTaskSpecificationFile() {
    // window.open('http://example.com', '_system');	Loads in the system browser
    // window.open('http://example.com', '_blank');	Loads in the InAppBrowser
    // window.open('http://example.com', '_blank', 'location=no');	Loads in the InAppBrowser with no location bar
    // window.open('http://example.com', '_self');	Loads in the Cordova web view
    // window.open(this.projectDescriptionLink, '_blank')
    // cordova.InAppBrowser.open(this.projectDescriptionLink, "_system", "location=true")
    this.iab.create(this.projectDescriptionLink, '_self', "location=true")
    return false
  }
}
