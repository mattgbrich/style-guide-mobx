import FoodStore from './FoodStore';
import NavStore from './NavStore';
import UIStore from './UIStore';
import UsersStore from './UsersStore';

class RootStore {
  constructor () {
    this.foodStore = new FoodStore(this);
    this.navStore = new NavStore(this);
    this.uiStore = new UIStore(this);
    this.usersStore = new UsersStore(this);
  }
}

export default new RootStore();
