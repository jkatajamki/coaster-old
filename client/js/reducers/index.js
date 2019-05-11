import { combineReducers } from 'redux';
import authReducer from './AuthReducers';
import alertReducer from './AlertReducers';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
  router: connectRouter(history),
  authentication: authReducer,
  alerts: alertReducer,
});
