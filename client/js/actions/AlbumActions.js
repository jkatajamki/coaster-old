export const setAlbumData = albums => ({
  type: 'SET_ALBUM_DATA',
  data: albums,
});

export const setAlbumFilter = filter => ({
  type: 'SET_ALBUM_FILTER',
  data: filter,
});
