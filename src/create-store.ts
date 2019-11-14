import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as demosReducer, DemosState } from './demos/demos-reducer';
import { reducer as payeesReducer } from './payees/payees-reducer';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { fetchPayees } from './payees/payees-actions';

const initialState: DemosState = {
  counter: 5,
};

const megaReducer = combineReducers({
  demos: demosReducer,
  payees: payeesReducer,
});

const store = createStore(
  megaReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware as ThunkMiddleware<any, any>, logger),
  ),
);

store.dispatch(fetchPayees());

export { store };
