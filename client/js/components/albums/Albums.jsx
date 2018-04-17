import React from 'react';
import Album from './Album';
import PropTypes from 'prop-types';

const Albums = ({ albums, onAlbumClick }) => (
  <div>
    <h1>Albums</h1>

    <ul>
      {albums.map((album, index) => (
        <Album key={index} {...album} onClick={() => onAlbumClick(index)} />
      ))}
    </ul>

  </div>
);

Albums.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOwned: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onAlbumClick: PropTypes.func.isRequired,
};

export default Albums;
