import { createStore } from 'redux';
import { reducer as demosReducer } from './demos/demos-reducer';

const store = createStore(demosReducer);

