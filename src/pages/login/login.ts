import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController, LoadingController, Loading } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

import { showLoading, showError } from '../../utils/utils'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test',
    password: 'test'
  };

  loading: Loading;

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
      
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    // this.user.login(this.account).subscribe((resp) => {
    //   // login success
    //   this.navCtrl.push(MainPage);
    // }, (err) => {
    //   // login error
    //   // this.navCtrl.push(MainPage);
    //   // Unable to log 
    //   console.log(err)
    //   // this.showError(this.loginErrorString);
    //   this.showError(err.message);
    // });
    (async () => {
      this.loading = showLoading(this.loadingCtrl);
      try {
        await this.user.login(this.account)
        this.navCtrl.push(MainPage);
        this.loading.dismiss();
      } catch (err) {
        console.log(err)
        this.loading.dismiss();
        // this.showError(this.loginErrorString);
        showError(err.message, this.alertCtrl);
      }
    }) ();
  }

}
