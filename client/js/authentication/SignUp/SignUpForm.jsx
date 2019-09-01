import React, { useState } from 'react'
import { connect } from 'react-redux';
import { validateUsername, validatePassword, validatePasswordAgain, validateEmail } from '../../../../common/utils/validation/validation';
import { validIcon, errorIcon } from '../../form-components/FormIcons';
import LabeledInput from '../../form-components/LabeledInput';
import { signUpRequest } from '../AuthenticationActions';

const SignUpForm = ({ signUpRequest }) => {
  const [signUpForm, setValues] = useState({
    email: '',
    username: '',
    password: '',
    passwordAgain: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = signUpForm;
    signUpRequest(email, username, password);
  }

  const updateField = (event) => {
    const { target: { value, name } } = event;
    setValues({
      ...signUpForm,
      [name]: value,
    });
  }

  const {
    isUsernameValid,
    isEmailValid,
    isPasswordValid,
    isPasswordAgainValid,
  } = (() => ({
    isUsernameValid: validateUsername(signUpForm.username),
    isEmailValid: validateEmail(signUpForm.email),
    isPasswordValid: validatePassword(signUpForm.password),
    isPasswordAgainValid: validatePasswordAgain(signUpForm.password, signUpForm.passwordAgain),
  }))();
  const emailHint = isEmailValid && isEmailValid ? validIcon : errorIcon;
  const usernameHint = isUsernameValid && isUsernameValid ? validIcon : errorIcon;
  const passwordHint = isPasswordValid && isPasswordValid ? validIcon : errorIcon;
  const passwordAgainHint = isPasswordAgainValid && isPasswordAgainValid ? validIcon : errorIcon;
  const signupButtonDisabled = !(isUsernameValid && isEmailValid && isPasswordValid && isPasswordAgainValid);

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Sign up for Coaster.</h2>
      <LabeledInput
        id="signupUsername"
        label="Username"
        type="text"
        name="username"
        hint={usernameHint}
        hintType={isUsernameValid ? 'success' : 'error'}
        placeholder="BeheritFangirl96"
        value={signUpForm.username}
        onChange={updateField}
      />
      <LabeledInput
        id="signupEmail"
        label="Email"
        type="email"
        name="email"
        hint={emailHint}
        hintType={isEmailValid ? 'success' : 'error'}
        placeholder="example@email.com"
        value={signUpForm.email}
        onChange={updateField}
      />
      <LabeledInput
        id="signupPassword"
        label="Password"
        type="password"
        name="password"
        hint={passwordHint}
        hintType={isPasswordValid ? 'success' : 'error'}
        placeholder="************"
        value={signUpForm.password}
        onChange={updateField}
      />
      <LabeledInput
        id="signupPasswordAgain"
        label="Password again"
        type="password"
        name="passwordAgain"
        hint={passwordAgainHint}
        hintType={isPasswordAgainValid ? 'success' : 'error'}
        placeholder="************"
        value={signUpForm.passwordAgain}
        onChange={updateField}
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

export default connect(null, { signUpRequest })(SignUpForm);
