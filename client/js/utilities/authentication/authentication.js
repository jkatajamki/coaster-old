import apiCall from '../api/apiCall';

export const userSignUp = async (username, email, password) => {
  try {
    return await apiCall(
      'POST',
      'auth/signUp',
      {
        username,
        email,
        password,
      }
    );
  } catch (e) {
    console.error('Error in sign up:', e);
    throw e;
  }
};
