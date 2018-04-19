import AlbumRecord from '../records/AlbumRecord';

export const setAlbumData = albums => ({
  type: 'SET_ALBUM_DATA',
  data: albums,
});

export const setAlbumFilter = filter => ({
  type: 'SET_ALBUM_FILTER',
  data: filter,
});

export const addAlbum = title => async (dispatch, getState) => {
  const state = getState();

  const newAlbum = new AlbumRecord({
    id: state.albums.length + 1,
    title,
    isOwned: false,
  });

  const albums = [...state.albums, newAlbum];

  dispatch({
    type: 'SET_ALBUM_DATA',
    data: albums,
  });
};
