import React from 'react';
import bindState from '../../utilities/bind-state';
import stateToProps from "../../utilities/state-to-props";
import { connect } from 'react-redux';

class Albums extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Albums</h1>


      </div>
    )
  }
}

export default connect(stateToProps('albums'))(Albums);
