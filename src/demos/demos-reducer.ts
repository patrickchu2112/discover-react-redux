import { demoActions } from './demos-actions';
import { AnyAction } from 'redux';

export interface DemosState {
  counter: number;
}

const defaultState: DemosState = {
  counter: 0
}

const reducer = (state: DemosState = defaultState, action: AnyAction) => {
  switch (action.type) {
    case demoActions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case demoActions.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export { reducer };
