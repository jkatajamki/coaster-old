import React from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid/';
import stateToProps from '../utilities/stateToProps';
import { dismissAlert } from './AlertActions';

const getAlertBoxClassNames = alertClass => `alert-box alert alert-dismissable ${alertClass}`;

const getCloseIconClassNames = alertClass => `close-alert-box-icon ${alertClass}`;

const AlertBox = ({ alert, handleClose }) => {
  const requestClose = () => {
    const { type, alertClass } = alert;
    handleClose(type, alertClass);
  }

  return (
    <div key={alert.id} className="row">
      <div className="col-sm-4 offset-sm-4">
        <div className={getAlertBoxClassNames(alert.alertClass)}>
          <div className="alert-box-header">
            <strong className="alert-title">{alert.title}</strong>
            <button
              aria-label="close"
              className="close close-alert-box"
              type="button"
              title="Close"
              onClick={requestClose}
            >
              <FontAwesomeIcon
                className={getCloseIconClassNames(alert.alertClass)}
                icon={faTimes}
              />
            </button>
          </div>
          <div className="alert-message">
            <p>{alert.message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Alerts = ({ alerts, dismissAlert }) => {
  const handleClose = (type, alertClass) => dismissAlert(type, alertClass)

  const { allAlerts } = alerts;

  return (
    <div id="alertsBlock" className="px-5">
      {allAlerts.map((alert, _, key) => <AlertBox key={key} alert={alert} handleClose={handleClose} />)}
    </div>
  )
}

export default connect(stateToProps('alerts'), {
  dismissAlert,
})(Alerts);
