import React from 'react';
import Album from './Album';
import PropTypes from 'prop-types';
import AddAlbum from '../../containers/add-album/AddAlbum';

const Albums = ({ albums, onAlbumClick }) => (
  <div>
    <h1>Albums</h1>

    <ul>
      {albums.map(({ isOwned, title }, index) => (
        <Album key={index} {...({ isOwned, title })} onClick={() => onAlbumClick(index)} />
      ))}
    </ul>

    <div id="addAlbum">
      <AddAlbum/>
    </div>
  </div>
);

Albums.propTypes = {
  albums: PropTypes.array,
  onAlbumClick: PropTypes.func.isRequired,
};

export default Albums;
