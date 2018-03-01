import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';
import { Tab5Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;
  
  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";
  tab5Title = " ";
  
  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    // translateService.get(['TAB_NEW_TITLE', 'TAB_PART_TITLE', 'TAB_WIN_TITLE', 'TAB_LOSE_TITLE', 'TAB_SETTINGS_TITLE']).subscribe(values => {
    //   this.tab1Title = values['TAB_NEW_TITLE'];
    //   this.tab2Title = values['TAB_PART_TITLE'];
    //   this.tab3Title = values['TAB_WIN_TITLE'];
    //   this.tab4Title = values['TAB_LOSE_TITLE'];
    //   this.tab5Title = values['TAB_SETTINGS_TITLE'];
    // });
  }
}
