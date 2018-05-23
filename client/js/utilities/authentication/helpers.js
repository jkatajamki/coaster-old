import { signInSuccess, signOut } from '../../actions/AuthenticationActions';
import { getUser } from './authentication';

const setSignedInStatus = async (store) => {
  const token = localStorage.getItem('token');

  if (token) {
    const response = await getUser(token);
    if (response.token) {
      store.dispatch(signInSuccess(response));
    } else {
      store.dispatch(signOut());
    }
  }
};

export default setSignedInStatus;
