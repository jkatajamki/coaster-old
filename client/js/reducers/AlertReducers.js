import createReducer from '../utilities/createReducer';
import AlertRecord from '../records/AlertRecord';
import AlertState from '../records/AlertState';

export default createReducer(new AlertState(), {
  ADD_ALERT: (state, {
    type,
    title,
    message,
    alertClass,
  }) => {
    const match = state.allAlerts.find(alert => alert.message === message);

    if (!match) {
      const allAlerts = state.allAlerts.concat(new AlertRecord({
        type,
        title,
        message,
        alertClass,
      }));

      const filtered = alertClass === 'alert-success'
        ? allAlerts.filter(alert => alert.alertClass !== 'alert-danger')
        : allAlerts;

      return state
        .set('allAlerts', filtered);
    }
    return state;
  },

  DISMISS_ALL_ALERTS: state => state
    .set('allAlerts', []),

  DISMISS_ALERT: (state, { type, alertClass }) => state
    .set('allAlerts', state.allAlerts.filter(alert =>
      alert.type !== type && alert.allAlerts !== alertClass)),
});
