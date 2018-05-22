import React, { Component } from 'react';
import { connect } from 'react-redux';
import stateToProps from '../../utilities/stateToProps';
import { signOut } from '../../actions/AuthenticationActions';

class SignOut extends Component {
  render() {
    const { isAuthenticated, currentUser } = this.props.authentication;
    const username = currentUser.username;

    return (
      <div className="sign-out">
        <div className="container">

          <div className="row justify-content-md-center">

            <div className="col-lg-6">
              <div className="main-center content-section">
                <p className="sign-out-message">
                  { isAuthenticated ? (`Signing out ${username}...`) : 'You have been signed out from Coaster.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.signOut();
  }
}

export default connect(stateToProps('authentication'), {
  signOut
})(SignOut);
