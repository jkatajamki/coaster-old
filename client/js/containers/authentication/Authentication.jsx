import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import AuthSuccess from '../../components/authentication/AuthSuccess';
import stateToProps from '../../utilities/stateToProps';
import { connect } from 'react-redux';

class Authentication extends Component {
  render() {
    const { isAuthenticated, currentUser } = this.props.authentication;
    const username = currentUser.username;

    return (
      <div className="authentication">
        <div className="container">

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
  }
}

export default connect(stateToProps('authentication'))(Authentication);
