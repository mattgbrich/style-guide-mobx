import React from 'react';
import appConfig from './config';
import Page from './components/Page';

function App () {
  return (
    <>
      <Page />
    </>
  );
}

export default appConfig(App);
