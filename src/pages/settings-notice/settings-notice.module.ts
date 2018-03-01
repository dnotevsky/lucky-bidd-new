import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsNoticePage } from './settings-notice';

@NgModule({
  declarations: [
    SettingsNoticePage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsNoticePage),
  ],
})
export class SettingsNoticePageModule {}
