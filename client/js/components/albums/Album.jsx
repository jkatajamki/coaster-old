import React from 'react';
import PropTypes from 'prop-types';

const Album = ({onClick, isOwned, title}) => (
  <li className="single-album" onClick={onClick}>
    {title}
  </li>
);

Album.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOwned: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Album;
