import ReduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import createRootReducer from '../reducers/index';

const configureStore = initialState => createStore(
  createRootReducer(history),
  initialState,
  compose(applyMiddleware(ReduxThunk))
);

export default configureStore;
