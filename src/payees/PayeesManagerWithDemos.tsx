import React, { useState, useEffect } from 'react';
import { payeesDao } from './payees-dao';

const PayeesManager = () => {
  const [payeesCount, setPayeesCount] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const [counter, setCounter] = useState(0);

  console.log('Updated component');
  useEffect(() => {
    console.log('Called useEffect');
    payeesDao.getPayees().then(payees => setPayeesCount(payees.length));

    
  }, [refresh]);

  return (
    <div>
      <h2>Payees Manager</h2>
      <p>There are {payeesCount} payees.</p>
      <button
        className="btn btn-primary"
        onClick={() => setRefresh(refresh + 1)}
      >
        Refresh
      </button>
      &nbsp;
      <button
        className="btn btn-warning"
        onClick={() => setCounter(counter + 1)}
      >
        Update (don't refresh data)
      </button>
    </div>
  );
};

export default PayeesManager;
