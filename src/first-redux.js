const redux = require('redux');

const initialState = {
  counter: 5,
};

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
}

const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const store = redux.createStore(reducer, initialState);
store.subscribe(() => {
  console.log('Store state: ', store.getState());
});
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
