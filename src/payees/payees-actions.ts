import { Dispatch } from 'redux';
import { payeesDao } from './payees-dao';
import { Payee } from './payee-types';

const payeeActions = {
  SORT_PAYEES: 'SORT_PAYEES',
  REQUEST_PAYEES: 'REQUEST_PAYEES',
  REQUEST_PAYEES_SUCCESS: 'REQUEST_PAYEES_SUCCESS',
  REQUEST_PAYEES_ERROR: 'REQUEST_PAYEES_ERROR',
};

const sortPayees = (field: string, direction?: 'asc' | 'desc') => {
  return {
    type: payeeActions.SORT_PAYEES,
    payload: {
      field,
      direction,
    },
  };
};

const requestPayees = () => ({
  type: payeeActions.REQUEST_PAYEES,
});

const requestPayeesSuccess = (payees: Payee[]) => ({
  type: payeeActions.REQUEST_PAYEES_SUCCESS,
  payload: { payees },
});

const requestPayeesError = (error: any) => ({
  type: payeeActions.REQUEST_PAYEES_ERROR,
  payload: { error },
});

function fetchPayees() {
  return (dispatch: Dispatch) => {
    dispatch(requestPayees());
    return payeesDao
      .getPayees()
      .then(payees => dispatch(requestPayeesSuccess(payees)))
      .catch(error => dispatch(requestPayeesError(error)));
  };
}

export {
  payeeActions,
  sortPayees,
  requestPayees,
  requestPayeesSuccess,
  requestPayeesError,
  fetchPayees,
};
