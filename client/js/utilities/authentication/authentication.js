import apiCall from '../api/apiCall';

export const userSignUp = (username, email, password) => apiCall('POST', 'auth/signUp', null, {
  username,
  email,
  password,
});

export const userSignIn = (username, password) => apiCall('POST', 'auth/signIn', null, {
  username,
  password,
});

export const getUser = token => apiCall('GET', 'user/me', token);
