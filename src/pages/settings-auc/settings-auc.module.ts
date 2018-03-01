import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsAucPage } from './settings-auc';

@NgModule({
  declarations: [
    SettingsAucPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsAucPage),
  ],
})
export class SettingsAucPageModule {}
