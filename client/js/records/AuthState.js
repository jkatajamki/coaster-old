import { Record } from 'immutable';
import UserRecord from './UserRecord';

const AuthState = new Record({
  isAuthenticated: false,
  isAuthenticating: false,
  currentUser: new UserRecord(),
  token: '',
});

export default AuthState;
