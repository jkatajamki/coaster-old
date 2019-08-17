import { userSignIn, userSignUp } from '../utilities/authentication/authentication';
import { addAlert } from '../alerts/AlertActions';

export const toggleSignInModal = () => dispatch => dispatch({
  type: 'TOGGLE_SIGN_IN_MODAL',
});

export const signUpSuccess = (signUpResponse) => {
  localStorage.setItem('token', signUpResponse.token);

  return {
    type: 'SIGN_UP_SUCCESS',
    data: signUpResponse,
  };
};

export const signUpFailure = error => ({
  type: 'SIGN_UP_FAILURE',
  data: error,
});

export const signUpRequest = (email, username, password) => (async (dispatch) => {
  dispatch({
    type: 'SIGN_UP_REQUEST',
  });

  try {
    const signUpResponse = await userSignUp(username, email, password);
    const { userObject, token } = signUpResponse;
    if (userObject == null || token == null) {
      dispatch(addAlert('sign-in', 'Error', 'Sign up failed', 'alert-danger'));
      dispatch(signUpFailure());
      return;
    }
    dispatch(signUpSuccess({ token, userObject }));
  } catch (e) {
    dispatch(addAlert('sign-in', 'Error', e.error.message, 'alert-danger'));
    dispatch(signUpFailure(e));
  }
});

export const signInSuccess = (signInResponse) => {
  localStorage.setItem('token', signInResponse.token);

  return {
    type: 'SIGN_IN_SUCCESS',
    data: signInResponse,
  };
};

export const signInFailure = (error) => {
  localStorage.removeItem('token');

  return {
    type: 'SIGN_IN_FAILURE',
    data: error,
  };
};

export const signInRequest = (username, password) => (async (dispatch) => {
  dispatch({
    type: 'SIGN_IN_REQUEST',
  });

  try {
    const signInResponse = await userSignIn(username, password);
    const { userObject, token } = signInResponse;
    if (userObject == null || token == null) {
      dispatch(addAlert('sign-in', 'Error', 'Sign in failed', 'alert-danger'));
      dispatch(signUpFailure());
      return;
    }
    dispatch(signInSuccess({ token, userObject }));
  } catch (e) {
    dispatch(addAlert('sign-in', 'Error', e.error.message, 'alert-danger'));
    dispatch(signInFailure(e));
  }
});

export const signOut = err => dispatch => {
  if (err) {
    dispatch(addAlert('sign-in', 'Error', err.message, 'alert-danger'));
  }

  localStorage.removeItem('token')

  dispatch({
    type: 'SIGN_OUT',
  });
};
