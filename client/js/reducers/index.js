import { combineReducers } from 'redux';
import albumReducer from './AlbumReducers';

export default combineReducers({
  albums: albumReducer,
});
