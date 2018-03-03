import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Api } from '../../providers/api/api';

/**
 * Generated class for the SettingsAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings-account',
  templateUrl: 'settings-account.html',
})
export class SettingsAccountPage {
  /*phone: String;
  email: String;*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    /*(async () => {
      const response = await this.api.get('user-contacts')
      if (response.data.success === true) {
        this.phone = response.data.phone
        this.email = response.data.email
      }
    })()*/
  }

  saveChanges() {
    /*(async () => {
      var updateParams = {
        phone: this.phone,
        email: this.email
      }
      const response = await this.api.post('user-contacts', updateParams)
      if (response.data.success === true) {
        this.phone = response.data.phone
        this.email = response.data.email
      }
    })()*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsAccountPage');
  }

}
