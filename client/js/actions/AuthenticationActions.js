export const signUpRequest = (email, username, password) => (async (dispatch) => {
  console.log('email', email);
  console.log('username', username);
  console.log('password', password);

  dispatch({
    type: 'SIGN_UP_REQUEST',
  });
});
