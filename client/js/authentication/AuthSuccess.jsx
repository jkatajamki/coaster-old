import React from 'react';

const AuthSuccess = ({ username, forSignUp = false}) => {
  const message = forSignUp
    ? `Thank you for signing up, ${username}, and welcome to Coaster.`
    : `You're now signed in as ${username}.`;

  return (
    <p className="auth-success-message">{message}</p>
  );
};

export default AuthSuccess;
