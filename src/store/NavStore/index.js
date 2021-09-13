import { makeAutoObservable } from 'mobx';

export default class NavStore {
  usersViews = {
    list: 'list',
    new: 'new',
    details: 'details'
  };
  section = {
    users: 'list'
  }

  constructor (rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  navigate (section, view) {
    this.section[section] = view;
  }
}
