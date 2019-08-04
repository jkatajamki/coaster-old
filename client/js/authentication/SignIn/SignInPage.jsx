import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';
import stateToProps from '../../utilities/stateToProps';
import AuthSuccess from '../AuthSuccess';
import AuthenticationPage from '../AuthenticationPage';

const SignInPage = (props) => {
  const { authentication: { isAuthenticated, currentUser } } = props;
  const { username } = currentUser;
  const mainSection = !isAuthenticated ? (<SignInForm />) : (<AuthSuccess username={username} />);
  const bottomSection = !isAuthenticated
    ? (
      <Link to="/signUp" className="nav-link">
        Don't have an account yet? Sign Up here!
      </Link>
    ) : (<h2>Welcome to Coaster.</h2>)

  return (<AuthenticationPage mainSectionChildren={mainSection} bottomSectionChildren={bottomSection} />);
}

export default connect(stateToProps('authentication'))(SignInPage);
