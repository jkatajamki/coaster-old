const addAlert = (type, title, message, alertClass) => dispatch => dispatch({
  type: 'ADD_ALERT',
  data: {
    type,
    title,
    message,
    alertClass,
  },
});

const dismissAlert = (type, alertClass) => dispatch => dispatch({
  type: 'DISMISS_ALERT',
  data: {
    type,
    alertClass,
  },
});

export {
  addAlert,
  dismissAlert,
};
