import React from 'react';
import FilterLink from '../../containers/FilterLink';
import AlbumFilters from '../../items/AlbumFilters';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={AlbumFilters.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={AlbumFilters.SHOW_NON_OWNED}>
      Ones you ain't got yet
    </FilterLink>
    {', '}
    <FilterLink filter={AlbumFilters.SHOW_OWNED}>
      Dem ones you done got
    </FilterLink>
  </p>
);

export default Footer;
