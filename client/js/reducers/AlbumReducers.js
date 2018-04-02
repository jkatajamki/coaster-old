import createReducer from '../utilities/create-reducer';
import AlbumState from '../records/album-state';

export default createReducer(new AlbumState(), {
  SET_ALBUM_DATA: (state, albums) => state
    .set('albums', albums || []),
  SET_ALBUM_FILTER: (state, filter) => state
    .set('albumFilter', filter),
});
