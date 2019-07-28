import { combineReducers } from 'redux';
import authReducer from './AuthReducers';
import alertReducer from './AlertReducers';

export default () => combineReducers({
  authentication: authReducer,
  alerts: alertReducer,
});
