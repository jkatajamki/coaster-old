import React from 'react';

const LabeledInput = ({
  id,
  label,
  hint,
  hintType = '',
  ...rest
}) => (
  <div className="form-group">

    <div className="input-group">
      <label htmlFor={id}>
        {label}
        { hint && <span className={`hint ${hintType}`}>{hint}</span>}
        <input id={id} className="form-control" {...rest} />
      </label>
    </div>

  </div>
);

export default LabeledInput;
