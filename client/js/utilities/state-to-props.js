import pick from 'lodash/pick';

const stateToProps = (...args) => state => pick(state, args);

export default stateToProps;
