import { combineReducers } from 'redux';
import albumReducer from './album-reducers';

export default combineReducers({
  albums: albumReducer,
});
