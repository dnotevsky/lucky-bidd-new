import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Settings } from '../../providers/providers';

/**
 * Generated class for the PayAccount1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay-account-1',
  templateUrl: 'pay-account-1.html',
})
export class PayAccount1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayAccount1Page');
  }

  openItem(pageName: string) {
    this.navCtrl.push(pageName, {});
  }
}

