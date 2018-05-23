import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './containers/Root';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import setSignedInStatus from './utilities/authentication/helpers';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

(async () => {
  const store = configureStore();
  const history = createHistory();
  await setSignedInStatus(store);

  const render = Component => {
    ReactDOM.render(
      <Provider store={store}>
        <Component store={store} history={history}/>
      </Provider>,
      document.querySelector('#root')
    );
  };

  render(Root);
})();
