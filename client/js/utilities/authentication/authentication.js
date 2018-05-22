import apiCall from '../api/apiCall';

const handleApiError = (e) => {
  console.error('Error in sign up:', e);
  throw e;
};

const userSignUp = (username, email, password) =>
  apiCall(
    'POST',
    'auth/signUp',
    null,
    {
      username,
      email,
      password,
    }
  ).catch(e => handleApiError(e));

const userSignIn = (username, password) =>
  apiCall(
    'POST',
    'auth/signIn',
    null,
    {
      username,
      password,
    }
  ).catch(e => handleApiError(e));

const getUser = token =>
  apiCall('GET', 'user/me', token).catch(e => handleApiError(e));

export {
  userSignUp,
  userSignIn,
  getUser,
};
