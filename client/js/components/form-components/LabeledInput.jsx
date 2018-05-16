import React from 'react';

const LabeledInput = ({id, label, hint, hintType = '', ...rest}) => (
  <div className="form-group">

    <label htmlFor={id}>
      {label}
      { hint && <span className={`hint ${hintType}`}>{hint}</span>}
    </label>

    <div className="input-group">
      <input id={id} className="form-control" {...rest}/>
    </div>

  </div>
);

export default LabeledInput;
