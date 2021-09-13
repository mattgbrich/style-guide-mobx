/**
 * This file will contain methods to wrap all HTTP requests for this specific data set.
 * Each method exported should return a Promise
 */

export const getFoodsList = () => {
  return Promise.resolve([
    {id: 1, name: 'Taco'},
    {id: 2, name: 'Burrito'},
    {id: 3, name: 'Nachos'},
    {id: 4, name: 'Empanada'},
  ]);
};