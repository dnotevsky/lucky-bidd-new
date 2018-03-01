import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Api } from '../../providers/api/api';

import { showLoading } from '../../utils/utils'

/**
 * Generated class for the SettingsAuc1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings-auc1',
  templateUrl: 'settings-auc1.html',
})
export class SettingsAuc1Page {
  mode: string = 'catalog';
  categoryLevel: number = 0;
  selectedRootCategoryId: number = 2;
  blockCategories: Category[] = [];
  categoriesLevel1: Category[] = [];
  selectedCategories: Category[] = [];
  selectedCategoriesCount?: number = null;

  loading: Loading;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: Api,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    (async () => {
        await this.loadBlockCategories(this.selectedRootCategoryId)
    })()
  }

  selectRootCategory(id: number) {
    (async () => {
        this.mode = 'catalog'
        this.categoryLevel = 0
        this.selectedRootCategoryId = id
        await this.loadBlockCategories(this.selectedRootCategoryId)
    })()
  }

  async loadBlockCategories(parentId: number) {
    this.loading = showLoading(this.loadingCtrl);
    let response = await this.api.get(`categories?parentId=${parentId}`);
    this.blockCategories = response.data;

    response = await this.api.get(`selected-categories-count`);
    this.selectedCategoriesCount = response.data.selectedCategoriesCount

    this.loading.dismiss();
  }

  selectBlockCategory(categoryId: number) {
    this.mode = 'catalog'
    this.categoryLevel = 1
    this.loadCategoriesLevel1(categoryId)
    // this.navCtrl.push(pageName, {});
  }

  async loadCategoriesLevel1(parentId: number) {
    this.loading = showLoading(this.loadingCtrl);
    let response = await this.api.get(`categories?parentId=${parentId}`);
    this.categoriesLevel1 = response.data;
    this.loading.dismiss();
  }

  selectCategoryLevel1(categoryLevel1: Category) {
    // debugger
    this.loadCategoriesLevel2(categoryLevel1)
    return false
  }

  async loadCategoriesLevel2(categoryLevel1: Category) {
    categoryLevel1.isOpen = !categoryLevel1.isOpen
    if (categoryLevel1.isOpen && !categoryLevel1.subcategories) {
      this.loading = showLoading(this.loadingCtrl);
      let response = await this.api.get(`categories?parentId=${categoryLevel1.id}`);
      categoryLevel1.subcategories = response.data;
      this.loading.dismiss();
    }
  }

  selectCategoryLevel2(categoryLevel2: Category) {
    console.log(categoryLevel2.selected)
  }

  async categorySelected(category: Category, parent: Category) {
    this.loading = showLoading(this.loadingCtrl);
    category.selected = !category.selected
    let params = {
      id: category.id,
      source: category.source,
      selected: category.selected
    }
    let response = await this.api.post(`select-category`, params);

    this.selectedCategoriesCount = response.data.selectedCategoriesCount

    if (response.data.success && category.source === 'app') {
      category.subcategories = response.data.subcategories;
      category.isOpen = true;
    }
    if (response.data.success && category.source === 'zakupki' && parent !== null) {
      parent.selected = response.data.parentSelected
    }
    this.loading.dismiss();
    return false
  }

  async showSelectedCategories() {
    if (this.mode === 'selected-categories') {
      this.mode = 'catalog'
      return
    }
    
    this.loading = showLoading(this.loadingCtrl);
    this.mode = 'selected-categories'
    let response = await this.api.get(`selected-categories`);
    this.selectedCategories = response.data.categories;
    this.loading.dismiss();
  }

}

interface Category {
  icon?: string;
  id: number;
  name: string;
  parentId?: number;
  selected: boolean;
  source: string;
  isOpen?: boolean;
  subcategories?: Category[];
}
