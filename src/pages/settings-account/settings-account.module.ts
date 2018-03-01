import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsAccountPage } from './settings-account';

@NgModule({
  declarations: [
    SettingsAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsAccountPage),
  ],
})
export class SettingsAccountPageModule {}
