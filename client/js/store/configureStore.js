import ReduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';

const history = createHistory();
const middleware = routerMiddleware(history);

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(middleware),
    applyMiddleware(ReduxThunk)
  )
);

export default configureStore;
