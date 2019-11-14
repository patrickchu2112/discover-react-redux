import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as demosReducer, DemosState } from './demos/demos-reducer';

const initialState: DemosState = {
  counter: 5,
};

const store = createStore(
  demosReducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger)),
);

export { store };
