const albumFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_OWNED: 'SHOW_OWNED',
  SHOW_NON_OWNED: 'SHOW_NON_OWNED',
};

export const getAlbumsFiltered = (albums, filter) => {
  const filtersMap = {
    'SHOW_ALL': albums,
    'SHOW_OWNED': albums.filter(album => album.isOwned),
    'SHOW_NON_OWNED': albums.filter(album => !album.isOwned),
  };

  return filtersMap[filter];
};

export default albumFilters;
