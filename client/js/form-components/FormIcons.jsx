import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTimesCircle } from '@fortawesome/fontawesome-free-solid';

const validIcon = <FontAwesomeIcon className="input-valid-icon" icon={faCheckSquare} />;
const errorIcon = <FontAwesomeIcon className="input-error-icon" icon={faTimesCircle} />;

export {
  validIcon,
  errorIcon,
};
