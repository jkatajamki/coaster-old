import createReducer from '../utilities/createReducer';
import AuthState from '../records/AuthState';
import UserRecord from '../records/UserRecord';

export default createReducer(new AuthState(), {
  TOGGLE_SIGN_IN_MODAL: state => state
    .set('displaySignInModal', !state.displaySignInModal),

  SIGN_UP_REQUEST: state => state
    .set('isAuthenticating', true),

  SIGN_UP_SUCCESS: (state, { token, userObject }) => state
    .set('isAuthenticating', false)
    .set('isAuthenticated', true)
    .set('currentUser', new UserRecord(userObject))
    .set('token', token),

  SIGN_UP_FAILURE: state => state
    .set('isAuthenticating', false),

  SIGN_IN_REQUEST: state => state
    .set('isAuthenticating', true),

  SIGN_IN_FAILURE: state => state
    .set('isAuthenticating', false),

  SIGN_IN_SUCCESS: (state, { token, userObject }) => state
    .set('displaySignInModal', false)
    .set('isAuthenticating', false)
    .set('isAuthenticated', true)
    .set('currentUser', new UserRecord(userObject))
    .set('token', token),

  SIGN_OUT: () => new AuthState(),
});
