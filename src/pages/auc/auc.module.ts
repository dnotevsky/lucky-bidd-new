import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AucPage } from './auc';

@NgModule({
  declarations: [
    AucPage,
  ],
  imports: [
    IonicPageModule.forChild(AucPage),
    TranslateModule.forChild()
  ],
  exports: [
    AucPage
  ],
  providers: [
    InAppBrowser
  ]
})
export class AucPageModule { }
