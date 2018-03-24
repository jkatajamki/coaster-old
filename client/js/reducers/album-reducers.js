import createReducer from '../utilities/create-reducer';
import AlbumState from '../records/album-state';

export default createReducer(new AlbumState(), {
  CREATE_ALBUM: (state, albums) => state
    .set('albums', albums),
});
