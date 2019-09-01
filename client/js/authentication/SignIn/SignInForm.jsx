import React, { useState } from 'react';
import { connect } from 'react-redux';
import LabeledInput from '../../form-components/LabeledInput';
import { validateUsername, validatePassword } from '../../../../common/utils/validation/validation';
import { validIcon, errorIcon } from '../../form-components/FormIcons';
import { signInRequest } from '../AuthenticationActions';

const SignInForm = ({ signInRequest }) => {
  const [signInForm, setValues] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = signInForm;
    signInRequest(username, password);
  };

  const updateField = (event) => {
    const { target: { value, name } } = event;
    setValues({
      ...signInForm,
      [name]: value,
    });
  };

  const { isUsernameValid, isPasswordValid } = (() => ({
    isUsernameValid: validateUsername(signInForm.username),
    isPasswordValid: validatePassword(signInForm.password),
  }))();
  const signInButtonDisabled = !(isUsernameValid && isPasswordValid);
  const usernameHint = isUsernameValid && isUsernameValid ? validIcon : errorIcon;
  const passwordHint = isPasswordValid && isPasswordValid ? validIcon : errorIcon;

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <h2>Sign in to Coaster.</h2>
      <LabeledInput
        id="signInUsername"
        label="Username"
        type="text"
        name="username"
        hint={usernameHint}
        hintType={isUsernameValid ? 'success' : 'error'}
        placeholder="Your username"
        value={signInForm.username}
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
        value={signInForm.password}
        onChange={updateField}
      />
      <div className="buttons-area text-right">
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

export default connect(null, { signInRequest })(SignInForm);
