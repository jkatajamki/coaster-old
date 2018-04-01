const setAlbumData = albums => ({
  type: 'SET_ALBUM_DATA',
  data: albums,
});

const setAlbumFilter = filter => ({
  type: 'SET_ALBUM_FILTER',
  data: filter,
});

export {
  setAlbumData,
  setAlbumFilter,
};
