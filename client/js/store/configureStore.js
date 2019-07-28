import ReduxThunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import createRootReducer from '../reducers/index';

const middleware = routerMiddleware(history);

const configureStore = initialState => createStore(
  createRootReducer(history),
  initialState,
  compose(applyMiddleware(middleware), applyMiddleware(ReduxThunk))
);

export default configureStore;
