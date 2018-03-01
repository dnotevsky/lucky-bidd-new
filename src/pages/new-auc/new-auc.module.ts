import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { NewAucPage } from './new-auc';

@NgModule({
  declarations: [
    NewAucPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAucPage),
    TranslateModule.forChild()
  ],
  exports: [
    NewAucPage
  ]
})
export class NewAucPageModule { }
