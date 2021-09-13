/**
 * This file will contain methods to wrap all HTTP requests for this specific data set.
 * Each method exported should return a Promise
 */

export const getUsersList = () => {
  return Promise.resolve([
    {id: 1, name: 'Monte Martinello', age: 20, job: 'Worker'},
    {id: 2, name: 'Gilbert Sullivan', age: 43, job: 'Laborer'},
    {id: 3, name: 'Morty McFairn', age: 32, job: 'Unemployed'}
  ]);
};
