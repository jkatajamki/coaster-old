import createReducer from '../utilities/createReducer';
import AuthState from '../records/AuthState';

export default createReducer(new AuthState(), {
  SIGN_UP_REQUEST: state => state
    .set('isAuthenticating', true),
});
