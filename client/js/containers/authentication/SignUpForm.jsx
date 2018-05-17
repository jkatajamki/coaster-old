import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindState from '../../utilities/bindState';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheckSquare, faTimesCircle } from '@fortawesome/fontawesome-free-solid';
import LabeledInput from '../../components/form-components/LabeledInput';
import {
  validateEmail,
  validateUsername,
  validatePassword,
  validatePasswordAgain,
} from '../../utilities/validation/validation';
import { signUpRequest } from '../../actions/AuthenticationActions';
import stateToProps from '../../utilities/stateToProps';

const getResetFormState = () => ({
  email: '',
  username: '',
  password: '',
  passwordAgain: '',
  validatingEmail: false,
  emailValid: true,
});

class SignUpForm extends Component {
  bind = bindState(this);

  state = getResetFormState();

  validateForm = ({ username, email, password, passwordAgain }) => ({
    isUsernameValid: validateUsername(username),
    isEmailValid: validateEmail(email),
    isPasswordValid: validatePassword(password),
    isPasswordAgainValid: validatePasswordAgain(password, passwordAgain)
  });

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, email, password } = this.state;

    this.props.signUpRequest(email, username, password)
  };

  render() {
    const { bind, handleSubmit, validateForm } = this;
    const { username, email, password, passwordAgain, validatingEmail, emailValid } = this.state;

    const validIcon = <FontAwesomeIcon className="input-valid-icon" icon={faCheckSquare} />;
    const errorIcon = <FontAwesomeIcon className="input-error-icon" icon={faTimesCircle} />;

    const { isUsernameValid, isEmailValid, isPasswordValid, isPasswordAgainValid } = validateForm({
      username, email, password, passwordAgain
    });

    const emailHint = isEmailValid && isEmailValid ? validIcon : errorIcon;
    const usernameHint = isUsernameValid && isUsernameValid ? validIcon : errorIcon;
    const passwordHint = isPasswordValid && isPasswordValid ? validIcon : errorIcon;
    const passwordAgainHint = isPasswordAgainValid && isPasswordAgainValid ? validIcon : errorIcon;

    const signupButtonDisabled = !(
      isUsernameValid
      && isEmailValid
      && isPasswordValid
      && isPasswordAgainValid
    );

    return (
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign up for Coaster.</h2>
        <LabeledInput
          id="signupUsername"
          label="Username"
          type="text"
          hint={usernameHint}
          hintType={isUsernameValid ? 'success' : 'error'}
          placeholder="BeheritFangirl96"
          {...bind('username')}
        />
        <LabeledInput
          id="signupEmail"
          label="Email"
          type="email"
          hint={emailHint}
          hintType={isEmailValid ? 'success' : 'error'}
          placeholder="example@email.com"
          {...bind('email')}
        />
        <LabeledInput
          id="signupPassword"
          label="Password"
          type="password"
          hint={passwordHint}
          hintType={isPasswordValid ? 'success' : 'error'}
          placeholder="************"
          {...bind('password')}
        />
        <LabeledInput
          id="signupPasswordAgain"
          label="Password again"
          type="password"
          hint={passwordAgainHint}
          hintType={isPasswordAgainValid ? 'success' : 'error'}
          placeholder="************"
          {...bind('passwordAgain')}
        />

        <div className="buttons-area">
          <input
            type="submit"
            color="primary"
            className="btn btn-primary my-2"
            value="Sign up for Coaster."
            disabled={signupButtonDisabled}
          />
        </div>
      </form>
    );
  }
}

export default connect(stateToProps('authentication'), {
  signUpRequest,
})(SignUpForm);
