import React, { Component } from 'react';
import bindState from '../../utilities/bindState';

class AddAlbum extends Component {
  state = {
    title: '',
  };

  bind = bindState(this);

  handleSubmit = event => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return;
    }


  };

  render() {
    const { bind, handleSubmit } = this;

    return (
      <div id="addAlbum">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            id="albumTitle"
            {...bind('title')}
          />
          <button type="submit">
            Add Album
          </button>
        </form>
      </div>
    );
  };
}
