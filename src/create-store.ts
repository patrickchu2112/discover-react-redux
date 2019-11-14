import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as demosReducer, DemosState } from './demos/demos-reducer';
import { reducer as payeesReducer } from './payees/payees-reducer';

const initialState: DemosState = {
  counter: 5,
};

const megaReducer = combineReducers({
  demos: demosReducer,
  payees: payeesReducer,
});

const store = createStore(
  demosReducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger)),
);

export { store };
