import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import authReducer from './AuthReducers';
import alertReducer from './AlertReducers';

export default (history) => combineReducers({
  router: connectRouter(history),
  authentication: authReducer,
  alerts: alertReducer,
});
