import React, { useState, useEffect } from 'react';
import { payeesDao } from './payees-dao';
import PayeesGrid from './PayeesGrid';
import { Payee } from './payee-types';

const PayeesManager = () => {
  const [payees, setPayees] = useState<Payee[]>([]);

  useEffect(() => {
    payeesDao.getPayees().then(payees => setPayees(payees));
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h2>Payees Manager</h2>
          <p>There are {payees.length} payees.</p>
        </div>
      </div>
      <section>
        <PayeesGrid payees={payees}/>
      </section>
    </React.Fragment>
  );
};

export default PayeesManager;
