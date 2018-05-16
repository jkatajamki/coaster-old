import { combineReducers } from 'redux';
import albumReducer from './AlbumReducers';
import authReducer from './AuthReducers';

export default combineReducers({
  albums: albumReducer,
  authentication: authReducer,
});
