const createReducer = (initialState, reducers) => (
  (state = initialState, action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action.data) : state;
  }
);

export default createReducer;
