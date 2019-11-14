import { createStore } from 'redux';
import { reducer as demosReducer, DemosState } from './demos/demos-reducer';

const initialState: DemosState = {
  counter: 5
}

const store = createStore(demosReducer, initialState);

export {store};

