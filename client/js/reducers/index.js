import { combineReducers } from 'redux';
import albumReducer from './AlbumReducers';
import authReducer from './AuthReducers';
import alertReducer from './AlertReducers';

export default combineReducers({
  albums: albumReducer,
  authentication: authReducer,
  alerts: alertReducer,
});
