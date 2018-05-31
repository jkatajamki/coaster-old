import { userSignIn, userSignUp } from '../utilities/authentication/authentication';
import { addAlert } from './AlertActions';

const toggleSignInModal = () => dispatch => dispatch({
  type: 'TOGGLE_SIGN_IN_MODAL',
});

const signUpSuccess = (signUpResponse) => {
  localStorage.setItem('token', signUpResponse.token);

  return {
    type: 'SIGN_UP_SUCCESS',
    data: signUpResponse,
  };
};

const signUpFailure = error => ({
  type: 'SIGN_UP_FAILURE',
  data: error,
});

const signUpRequest = (email, username, password) => (async (dispatch) => {
  dispatch({
    type: 'SIGN_UP_REQUEST',
  });

  try {
    const signUpResponse = await userSignUp(username, email, password);
    dispatch(signUpSuccess(signUpResponse));
  } catch (e) {
    dispatch(addAlert('sign-in', 'Error', e.error.message, 'alert-danger'));
    dispatch(signUpFailure(e));
  }
});

const signInSuccess = (signInResponse) => {
  localStorage.setItem('token', signInResponse.token);

  return {
    type: 'SIGN_IN_SUCCESS',
    data: signInResponse,
  };
};

const signInFailure = (error) => {
  localStorage.removeItem('token');

  return {
    type: 'SIGN_IN_FAILURE',
    data: error,
  };
};

const signInRequest = (username, password) => (async (dispatch) => {
  dispatch({
    type: 'SIGN_IN_REQUEST',
  });

  try {
    const signInResponse = await userSignIn(username, password);
    dispatch(signInSuccess(signInResponse));
  } catch (e) {
    dispatch(addAlert('sign-in', 'Error', e.error.message, 'alert-danger'));
    dispatch(signInFailure(e));
  }
});

const signOut = () => {
  localStorage.removeItem('token');

  return {
    type: 'SIGN_OUT',
  };
};

export {
  toggleSignInModal,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signInRequest,
  signInSuccess,
  signInFailure,
  signOut,
};
