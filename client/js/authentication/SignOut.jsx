import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import stateToProps from '../utilities/stateToProps';
import { signOut } from './AuthenticationActions';

class SignOut extends PureComponent {
  componentDidMount() {
    const { signOut } = this.props;
    signOut();
  }

  render() {
    const { authentication: { isAuthenticated, currentUser } } = this.props;
    const { username } = currentUser;

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
}

export default connect(stateToProps('authentication'), {
  signOut,
})(SignOut);
