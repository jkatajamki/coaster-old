import { Record } from 'immutable';
import AlbumFilters from '../items/AlbumFilters';

const AlbumState = new Record({
  albums: [],
  albumFilter: AlbumFilters.SHOW_ALL,
});

export default AlbumState;
