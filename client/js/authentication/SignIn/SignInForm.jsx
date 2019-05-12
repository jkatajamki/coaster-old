import React, { Component } from 'react';
import { connect } from 'react-redux';
import stateToProps from '../../utilities/stateToProps';
import LabeledInput from '../../form-components/LabeledInput';
import { validateUsername, validatePassword } from '../../../../common/utils/validation/validation';
import { validIcon, errorIcon } from '../../form-components/FormIcons';
import { signInRequest } from '../AuthenticationActions';
import bindState from '../../utilities/bind-state';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.bindToState = bindState(this);
    this.state = {
      username: '',
      password: '',
    }
  }

  validateForm(username, password) {
    return {
      isUsernameValid: validateUsername(username),
      isPasswordValid: validatePassword(password),
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state;
    const { signInRequest } = this.props;
    signInRequest(username, password);
  }

  render() {
    const { bindToState, handleSubmit, validateForm } = this;
    const { username, password } = this.state;
    const { isUsernameValid, isPasswordValid } = validateForm(username, password);
    const usernameHint = isUsernameValid && isUsernameValid ? validIcon : errorIcon;
    const passwordHint = isPasswordValid && isPasswordValid ? validIcon : errorIcon;
    const signInButtonDisabled = !(isUsernameValid && isPasswordValid);

    return (
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <LabeledInput
          id="signInUsername"
          label="Username"
          type="text"
          hint={usernameHint}
          hintType={isUsernameValid ? 'success' : 'error'}
          placeholder="Your username"
          {...bindToState('username')}
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

        <div className="buttons-area text-center">
          <input
            id="signInButton"
            type="submit"
            color="primary"
            className="btn btn-primary my-2 px-5"
            value="Sign in."
            disabled={signInButtonDisabled}
          />
        </div>
      </form>
    );
  }
}

export default connect(stateToProps('authentication'), {
  signInRequest,
})(SignInForm);
