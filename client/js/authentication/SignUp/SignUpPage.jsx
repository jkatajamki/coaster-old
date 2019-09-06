import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import AuthSuccess from '../AuthSuccess';
import stateToProps from '../../utilities/stateToProps';
import SignInButton from '../SignIn/SignInButton';
import { toggleSignInModal } from '../AuthenticationActions';
import AuthenticationPage from '../AuthenticationPage';

const Authentication = ({ toggleSignInModal, authentication }) => {
  const { currentUser, isAuthenticated } = authentication;
  const username = currentUser.get('username');
  const mainSection = !isAuthenticated ? (<SignUpForm />) : (<AuthSuccess username={username} />)
  const bottomSection = !isAuthenticated ? (<SignInButton toggleSignInModal={toggleSignInModal} />) : (<h2>Welcome to Coaster.</h2>)

  return (<AuthenticationPage mainSectionChildren={mainSection} bottomSectionChildren={bottomSection} />);
}

export default connect(stateToProps('authentication'), {
  toggleSignInModal,
})(Authentication);
