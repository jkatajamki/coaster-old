const innerBind = (key) => {
  if (typeof key !== 'string') {
    throw new Error('Key must be a string (function: innerBind)');
  }

  return {
    value: this.state[key],
    onChange: event => this.setState({
      [key]: event.target.value,
    }),
  };
};

const bindState = thisBind => innerBind.bind(thisBind);

export default bindState;
