import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Settings } from '../../providers/providers';
import { Api } from '../../providers/api/api';

/**
 * Generated class for the SettingsNoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings-notice',
  templateUrl: 'settings-notice.html',
})
export class SettingsNoticePage {
  notifications: Notifications = {
    smsNewAuctions: false,
    smsWinAuctions: false,
    pushNewAuctions: false,
    pushWinAuctions: false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    (async () => {
      const response = await this.api.get('notifications')
      if (response.data.success === true) {
        this.notifications = response.data.notifications
      }
    })()
  }

  toggleChecked (toggleType, toggleValue) {
    (async () => {
      var updateParams = {
        toggleType: toggleType,
        toggleValue: toggleValue
      }
      const response = await this.api.post('notifications', updateParams)
      if (response.data.success === true) {
        this.notifications = response.data.notifications
      }
    })()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsNoticePage');
  }

}

interface Notifications {
  smsNewAuctions: Boolean;
  smsWinAuctions: Boolean;
  pushNewAuctions: Boolean;
  pushWinAuctions: Boolean;
}
