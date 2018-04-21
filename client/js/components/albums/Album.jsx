import React from 'react';

const Album = ({onClick, isOwned, title}) => (
  <li className="single-album" onClick={onClick}>
    {title}
  </li>
);

export default Album;
