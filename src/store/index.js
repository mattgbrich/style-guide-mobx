import { createContext, useContext } from 'react';
import RootStore from './root';

export const StoreContext = createContext(RootStore);

export const useStore = () => useContext(StoreContext);

export default function StoreProvider ({ children }) {
  return (<StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>);
}
