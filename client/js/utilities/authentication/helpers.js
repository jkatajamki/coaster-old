import { getUser } from './authentication';
import { signInSuccess, signOut } from '../../authentication/AuthenticationActions';

const setSignedInStatus = async (store) => {
  const token = localStorage.getItem('token');

  if (token) {
    try {
      const response = await getUser(token);
      if (!response || response.token == null) {
        store.dispatch(signOut());
        return;
      }
      store.dispatch(signInSuccess(response));
    } catch (err) {
      store.dispatch(signOut(err));
    }
  }
};

export default setSignedInStatus;
