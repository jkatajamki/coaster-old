import { Record } from 'immutable';

const AlertRecord = Record({
  id: null,
  type: '',
  title: '',
  message: '',
  alertClass: '',
});

export default AlertRecord;
