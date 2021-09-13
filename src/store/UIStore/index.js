import { makeAutoObservable } from 'mobx';

export default class UIStore {
  selectedTab = 0;

  constructor (rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  selectTab (selectedTab) {
    this.selectedTab = selectedTab;
  }
}
