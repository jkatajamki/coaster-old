import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import AuthSuccess from '../../components/authentication/AuthSuccess';
import stateToProps from '../../utilities/stateToProps';
import { connect } from 'react-redux';
import { toggleSignInModal } from '../../actions/AuthenticationActions';

class Authentication extends Component {

  render() {
    const { authentication, toggleSignInModal } = this.props;
    const { isAuthenticated, currentUser } = authentication;
    const username = currentUser.username;

    return (
      <div className="authentication">
        <div className="container">

          <div className="row mt-4 justify-content-md-center">
            <div className="col-lg-6 text-center">
              <span className="align-middle">
                Already have an account?
              </span>
              <button
                id="openSignInModalButton"
                className="btn btn-outline-secondary my-2 px-5 mx-3"
                onClick={toggleSignInModal}
              >Sign in.</button>
            </div>
          </div>

          <div className="row justify-content-md-center">

            <div className="col-lg-6">
              <div className="main-authentication main-center content-section">
                { !isAuthenticated
                  ? (<SignUpForm/>)
                  : (<AuthSuccess username={username} />)
                }
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  };
}

export default connect(stateToProps('authentication'), {
  toggleSignInModal
})(Authentication);
