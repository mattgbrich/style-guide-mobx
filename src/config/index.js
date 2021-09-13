import React from 'react';
import StylesProvider from '../styles/StylesProvider';
import StoreProvider from '../store';

function appConfig (AppComponent) {
  return () => (
    // wrap app component in any necessary global configurations
    <StylesProvider>
      <StoreProvider>
        <AppComponent /> 
      </StoreProvider>
    </StylesProvider>
  );
}

export default appConfig;
