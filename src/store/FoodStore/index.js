import { makeAutoObservable } from 'mobx';
import { getFoodsList } from './api';
import { v4 } from 'uuid';

export default class FoodStore {
  foods = [];
  selected = '';

  constructor (rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fetchFoods () {
    getFoodsList()
      .then((data) => this.foods = data);
  }

  addFood (newFood) {
    this.foods = [...this.foods, {id: v4(), name: newFood}];
  }

  selectFood (selected) {
    this.selected = selected.name;
  }
}
