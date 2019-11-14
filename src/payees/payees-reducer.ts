import { AnyAction } from 'redux';
import { payeeActions } from './payees-actions';

export interface PayeesState {
  sortField: string;
  sortDirection: 'asc' | 'desc';
}

const defaultState: PayeesState = {
  sortField: '',
  sortDirection: 'asc',
};

const reducer = (state = defaultState, { type, payload }: AnyAction) => {
  switch (type) {
    case payeeActions.SORT_PAYEES:
      const nextState: PayeesState = {
        sortField: payload.field,
        sortDirection: 'asc',
      };
      if (payload.field === state.sortField && state.sortDirection === 'asc') {
        nextState.sortDirection = 'desc';
      }
      return { ...state, ...nextState };

    default:
      return state;
  }
};

export { reducer };
