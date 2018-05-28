import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import stateToProps from '../../utilities/stateToProps';
import { toggleSignInModal } from '../../actions/AuthenticationActions';
import SignInForm from './SignInForm';

class SignInModal extends Component {
  toggleModal = () => {
    this.props.toggleSignInModal();
  };

  render() {
    const { toggleModal } = this;
    const { displaySignInModal } = this.props.authentication;

    return (
      <Modal
        className="sign-in-modal"
        isOpen={displaySignInModal}
        toggle={toggleModal}
      >
        <ModalHeader toggle={toggleModal}>
          <h2>Sign in to Coaster.</h2>
        </ModalHeader>
        <ModalBody>
          <div className="pb-3 pt-3">
            <SignInForm />
          </div>
        </ModalBody>
        <ModalFooter>
          <p>Retro deep v flexitarian skateboard ugh.</p>
        </ModalFooter>
      </Modal>
    );
  };
}

export default connect(stateToProps('authentication'), {
  toggleSignInModal
})(SignInModal);
