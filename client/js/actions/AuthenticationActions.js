import { userSignUp } from '../utilities/authentication/authentication';

export const signUpRequest = (email, username, password) => (async (dispatch) => {
  dispatch({
    type: 'SIGN_UP_REQUEST',
  });

  const signUpResponse = await userSignUp(username, email, password);
  console.log('signUpResponse', signUpResponse);
});
