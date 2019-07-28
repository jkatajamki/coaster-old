/* eslint no-unused-vars: "warn" */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Root from './Root';
import configureStore from './store/configureStore';
import setSignedInStatus from './utilities/authentication/helpers';

(async () => {
  const store = configureStore();
  await setSignedInStatus(store);

  const render = (Component) => {
    ReactDOM.render(
      <Provider store={store}>
        <Component store={store} />
      </Provider>,
      document.querySelector('#root')
    );
  };

  render(Root);
})();
