import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import createRootReducer from '../reducers/index';

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const configureStore = initialState => createStore(
  createRootReducer(history),
  initialState,
  compose(applyMiddleware(middleware), applyMiddleware(ReduxThunk))
);

export default configureStore;
