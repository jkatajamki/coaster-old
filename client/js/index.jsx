import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/root';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configure-store';

const store = configureStore();
const history = createHistory();

render(
  <Provider store={store}>
    <Root store={store} history={history}/>
  </Provider>,
  document.querySelector('#root')
);
