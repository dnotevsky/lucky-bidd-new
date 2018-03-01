import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagesDialogsPage } from './messages-dialogs';

@NgModule({
  declarations: [
    MessagesDialogsPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagesDialogsPage),
  ],
})
export class MessagesDialogsPageModule {}
