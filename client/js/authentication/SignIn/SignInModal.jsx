import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import stateToProps from '../../utilities/stateToProps';
import SignInForm from './SignInForm';
import { toggleSignInModal } from '../AuthenticationActions';

const SignInModal = ({ authentication: { displaySignInModal }, toggleSignInModal }) => (
  <Modal
    className="sign-in-modal"
    isOpen={displaySignInModal}
    toggle={toggleSignInModal}
  >
    <ModalHeader className="mb-3" toggle={toggleSignInModal}>
      Sign in to Coaster.
    </ModalHeader>
    <ModalBody>
      <div className="pb-3 pt-4">
        <SignInForm />
      </div>
    </ModalBody>
    <ModalFooter className="mt-3">
      <p>Retro deep v flexitarian skateboard ugh.</p>
    </ModalFooter>
  </Modal>
)

export default connect(stateToProps('authentication'), {
  toggleSignInModal,
})(SignInModal);
