import { makeAutoObservable } from 'mobx';
import { getUsersList } from './api';
import { v4 } from 'uuid';

const defaultState = {
  users: [],
  selected: '',
  newUser: {
    name: '',
    age: '',
    job: '',
    id: null
  }
};

export default class UsersStore {
  state = defaultState;

  constructor (rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fetchUsers () {
    getUsersList()
      .then(data => this.state.users = data)
  }

  updateNewUser (field, value) {
    this.state.newUser[field] = value;
  }

  clearNewUser () {
    this.state.newUser = defaultState.newUser;
  }

  addUser () {
    const { navStore } = this.rootStore;
    this.state.newUser.id = v4();
    this.state.users = [...this.state.users, this.state.newUser];
    this.state.newUser = defaultState.newUser;
    navStore.navigate('users', navStore.usersViews.list);
  }

  selectUser (selected) {
    this.state.selected = selected;
  }
}
