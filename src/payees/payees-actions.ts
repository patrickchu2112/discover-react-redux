const payeeActions = {
  SORT_PAYEES: 'SORT_PAYEES'
}

const sortPayees = (field: string, direction?: 'asc' | 'desc') => {
  return {
    type: payeeActions.SORT_PAYEES,
    payload: {
      field,
      direction
    }
  }
}

export {payeeActions, sortPayees};