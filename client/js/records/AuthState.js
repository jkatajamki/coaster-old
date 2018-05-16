import { Record } from 'immutable';

const AuthState = new Record({
  isAuthenticated: false,
  isAuthenticating: false,
});

export default AuthState;
