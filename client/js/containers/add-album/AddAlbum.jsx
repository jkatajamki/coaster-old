import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindState from '../../utilities/bindState';
import { addAlbum } from '../../actions/AlbumActions';
import stateToProps from '../../utilities/stateToProps';

const getResetFormState = () => ({
  title: '',
});

class AddAlbum extends Component {
  state = getResetFormState();

  bind = bindState(this);

  handleSubmit = event => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.trim()) {
      return;
    }

    this.props.addAlbum(title);

    this.setState({
      title: '',
    });
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

export default connect(stateToProps('albums'), {
  addAlbum,
})(AddAlbum);
