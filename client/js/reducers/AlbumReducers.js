import createReducer from '../utilities/createReducer';
import AlbumState from '../records/AlbumState';

export default createReducer(new AlbumState(), {
  SET_ALBUM_DATA: (state, albums) => state
    .set('albums', albums || []),
  SET_ALBUM_FILTER: (state, filter) => state
    .set('albumFilter', filter),
});
