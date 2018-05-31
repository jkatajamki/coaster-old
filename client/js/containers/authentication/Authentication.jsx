/* eslint react/prefer-stateless-function: "warn" */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import AuthSuccess from '../../components/authentication/AuthSuccess';
import stateToProps from '../../utilities/stateToProps';
import { toggleSignInModal } from '../../actions/AuthenticationActions';
import SignInButton from '../../components/authentication/SignInButton';

class Authentication extends Component {
  render() {
    const { toggleSignInModal, authentication } = this.props;
    const { currentUser, isAuthenticated } = authentication;
    const { username } = currentUser;

    return (
      <div className="authentication">
        <div className="container">

          <div className="row mt-4 justify-content-md-center">
            <div className="col-lg-6 text-center">
              { !isAuthenticated
                ? (<SignInButton toggleSignInModal={toggleSignInModal} />)
                : (<h2>Welcome to Coaster.</h2>)
              }
            </div>
          </div>

          <div className="row justify-content-md-center">

            <div className="col-lg-6">
              <div className="main-authentication main-center content-section">
                { !isAuthenticated
                  ? (<SignUpForm />)
                  : (<AuthSuccess username={username} />)
                }
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default connect(stateToProps('authentication'), {
  toggleSignInModal,
})(Authentication);
