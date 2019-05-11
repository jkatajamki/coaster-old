export default thisBind => (
  function innerBind(key) {
    if (typeof key !== 'string') {
      throw new Error('Key must be a string (function: innerBind)');
    }

    return {
      value: this.state[key],
      onChange: event => this.setState({
        [key]: event.target.value,
      }),
    };
  }
).bind(thisBind);
