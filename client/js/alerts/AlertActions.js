export const addAlert = (type, title, message, alertClass) => dispatch => dispatch({
  type: 'ADD_ALERT',
  data: {
    type,
    title,
    message,
    alertClass,
  },
});

export const dismissAlert = (type, alertClass) => dispatch => dispatch({
  type: 'DISMISS_ALERT',
  data: {
    type,
    alertClass,
  },
});
