const stateToProps = (...args) => state => (({ ...args }) => ({ ...args }))(state);

export default stateToProps;
