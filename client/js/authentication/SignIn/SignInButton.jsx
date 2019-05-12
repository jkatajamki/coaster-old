import React from 'react';

const SignInButton = ({ toggleSignInModal }) => (
  <div>
    <span className="align-middle">
      Already have an account?
    </span>
    <button
      type="button"
      id="openSignInModalButton"
      className="btn btn-outline-secondary my-2 px-5 mx-3"
      onClick={toggleSignInModal}
    >
      Sign in.
    </button>
  </div>
);

export default SignInButton;
