import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
  const onLinkClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return active
    ? <span>{children}</span>
    : <a href="" onClick={event => onLinkClick(event)}>{children}</a>;
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
