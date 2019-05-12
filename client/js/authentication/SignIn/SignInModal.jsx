import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import stateToProps from '../../utilities/stateToProps';
import SignInForm from './SignInForm';
import { toggleSignInModal } from '../AuthenticationActions';

class SignInModal extends PureComponent {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { toggleSignInModal } = this.props;
    toggleSignInModal();
  }

  render() {
    const { toggleModal } = this;
    const { authentication: { displaySignInModal } } = this.props;

    return (
      <Modal
        className="sign-in-modal"
        isOpen={displaySignInModal}
        toggle={toggleModal}
      >
        <ModalHeader className="mb-3" toggle={toggleModal}>
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
    );
  }
}

export default connect(stateToProps('authentication'), {
  toggleSignInModal,
})(SignInModal);
