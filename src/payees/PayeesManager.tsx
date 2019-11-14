import React, { useState, useEffect } from 'react';
import { payeesDao } from './payees-dao';
import PayeesGrid, { ColumnConfig } from './PayeesGrid';
import { Payee } from './payee-types';

const PayeesManager = () => {
  const [payees, setPayees] = useState<Payee[]>([]);

  useEffect(() => {
    payeesDao.getPayees().then(payees => setPayees(payees));
  }, []);

  const columns: ColumnConfig[] = [
    {
      field: 'payeeName',
      label: 'Payee Name',
    },
    {
      field: 'address.city',
      label: 'City'
    },
    {
      field: 'address.state',
      label: 'State'
    },
    {
      field: 'categoryId',
      label: 'Category'
    }
  ];

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h2>Payees Manager</h2>
          <p>There are {payees.length} payees.</p>
        </div>
      </div>
      <section>
        <PayeesGrid payees={payees} columnConfig={columns} sortPayees={() => {}}/>
      </section>
    </React.Fragment>
  );
};

export default PayeesManager;
