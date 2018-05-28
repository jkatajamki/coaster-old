import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid/';
import stateToProps from '../../utilities/stateToProps';
import { dismissAlert } from '../../actions/AlertActions';

class Alerts extends Component {
  getAlertBoxClassNames = alertClass => `alert-box alert alert-dismissable ${alertClass}`;

  getCloseIconClassNames = alertClass => `close-alert-box-icon ${alertClass}`;

  handleClose = (type, alertClass) => {
    this.props.dismissAlert(type, alertClass);
  };

  render() {
    const { alerts } = this.props;
    const { allAlerts } = alerts;
    const { getAlertBoxClassNames, getCloseIconClassNames, handleClose } = this;

    return (
      <div id="alertsBlock" className="px-5">
        { allAlerts.map((alert, key) =>
          <div key={key} className="row">
            <div className="col-sm-4 offset-sm-4">
              <div className={getAlertBoxClassNames(alert.alertClass)}>

                <div className="alert-box-header">
                  <strong className="alert-title">{alert.title}</strong>
                  <button
                    aria-label="close"
                    className="close close-alert-box"
                    type="button"
                    title="Close"
                    onClick={handleClose}
                  >
                    <FontAwesomeIcon className={getCloseIconClassNames(alert.alertClass)} icon={faTimes} />
                  </button>
                </div>

                <div className="alert-message">
                  <p>{alert.message}</p>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
}

export default connect(stateToProps('alerts'), {
  dismissAlert,
})(Alerts);
