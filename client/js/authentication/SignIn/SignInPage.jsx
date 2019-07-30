import React from 'react';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';
import stateToProps from '../../utilities/stateToProps';
import AuthSuccess from '../AuthSuccess';

const SignInPage = (props) => {
  const { authentication: { isAuthenticated, currentUser } } = props;
  const { username } = currentUser;

  if (isAuthenticated) {
    return <AuthSuccess username={username} />;
  }

  return (
    <div className="authentication">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-6 text-center">
            <div className="main-authentication main-center content-section">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(stateToProps('authentication'))(SignInPage);
