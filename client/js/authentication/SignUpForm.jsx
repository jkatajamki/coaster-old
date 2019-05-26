import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { validIcon, errorIcon } from '../form-components/FormIcons';
import LabeledInput from '../form-components/LabeledInput';
import {
  validateUsername,
  validatePassword,
  validatePasswordAgain,
  validateEmail,
} from '../../../common/utils/validation/validation';
import stateToProps from '../utilities/stateToProps';
import { signUpRequest } from './AuthenticationActions';
import bindState from '../utilities/bind-state';

class SignUpForm extends PureComponent {
  constructor(props) {
    super(props);

    this.bindToState = bindState(this);

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordAgain: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm(username, email, password, passwordAgain) {
    return {
      isUsernameValid: validateUsername(username),
      isEmailValid: validateEmail(email),
      isPasswordValid: validatePassword(password),
      isPasswordAgainValid: validatePasswordAgain(password, passwordAgain),
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const { username, email, password } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(email, username, password);
  }

  render() {
    const { bindToState, handleSubmit, validateForm } = this;
    const {
      username,
      email,
      password,
      passwordAgain,
    } = this.state;

    const {
      isUsernameValid,
      isEmailValid,
      isPasswordValid,
      isPasswordAgainValid,
    } = validateForm(
      username,
      email,
      password,
      passwordAgain,
    );

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
          {...bindToState('username')}
        />
        <LabeledInput
          id="signupEmail"
          label="Email"
          type="email"
          hint={emailHint}
          hintType={isEmailValid ? 'success' : 'error'}
          placeholder="example@email.com"
          {...bindToState('email')}
        />
        <LabeledInput
          id="signupPassword"
          label="Password"
          type="password"
          hint={passwordHint}
          hintType={isPasswordValid ? 'success' : 'error'}
          placeholder="************"
          {...bindToState('password')}
        />
        <LabeledInput
          id="signupPasswordAgain"
          label="Password again"
          type="password"
          hint={passwordAgainHint}
          hintType={isPasswordAgainValid ? 'success' : 'error'}
          placeholder="************"
          {...bindToState('passwordAgain')}
        />

        <div className="buttons-area text-right">
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
