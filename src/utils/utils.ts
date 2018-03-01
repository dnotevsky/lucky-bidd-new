import { LoadingController, Loading, AlertController } from 'ionic-angular';

export function showLoading(loadingCtrl: LoadingController): Loading {
    var loading: Loading = loadingCtrl.create({
      spinner: 'bubbles',
      cssClass: 'loader',
      content: '',
      dismissOnPageChange: false,
      duration: 10000,
      showBackdrop: false
    });
    loading.present();
    return loading;
  }
 
export function showError(text: string, alertCtrl: AlertController) {
  // let toast = this.toastCtrl.create({
  //   message: text,
  //   duration: 3000,
  //   position: 'top'
  // });
  // toast.present();
  let alert = alertCtrl.create({
    title: 'Ошибка!',
    subTitle: text,
    buttons: ['OK']
  });
  alert.present(prompt);
}



  
  