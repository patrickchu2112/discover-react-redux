const redux = require('redux');

const initialState = {
  counter: 5,
};

const actionTypes = {
  INCREMENT: 'INCREMENT',
  ADD: 'ADD',
  SET_COUNTER: 'SET_COUNTER',
};

// Action Creator
const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

const add = amount => {
  return {
    type: actionTypes.ADD,
    payload: {
      amount,
    },
  };
};

const setCounter = counter => {
  return {
    type: actionTypes.SET_COUNTER,
    payload: {
      counter,
    },
  };
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.ADD:
      return { ...state, counter: state.counter + payload.amount };
    case actionTypes.SET_COUNTER:
      // return {...state, counter: payload.counter};
      return {...state, ...payload};
      // return Object.assign({}, state, payload);
    default:
      return state;
  }
};

const store = redux.createStore(reducer, initialState);
store.subscribe(() => {
  console.log('Store state: ', store.getState());
});
store.dispatch(increment());
store.dispatch({ type: 'GREETING' });
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(add(10));
store.dispatch(setCounter(12));
