import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTimesCircle } from '@fortawesome/fontawesome-free-solid';

export const validIcon = <FontAwesomeIcon className="input-valid-icon" icon={faCheckSquare} />;
export const errorIcon = <FontAwesomeIcon className="input-error-icon" icon={faTimesCircle} />;
