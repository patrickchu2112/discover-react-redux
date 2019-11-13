import React, { useState, useEffect } from 'react';
import { payeesDao } from './payees-dao';

const PayeesManager = () => {
  const [payeesCount, setPayeesCount] = useState(0);

  useEffect(() => {
    payeesDao.getPayees().then(payees => setPayeesCount(payees.length));
  }, []);

  return (
    <div>
      <h2>Payees Manager</h2>
      <p>There are {payeesCount} payees.</p>
    </div>
  );
};

export default PayeesManager;
