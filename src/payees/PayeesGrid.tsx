import React from 'react';
import { Payee } from './payee-types';

interface PayeesGridProps {
  payees: Payee[];
  columnConfig?: any;
}

const PayeesGrid = ({ payees, columnConfig }: PayeesGridProps) => {
  return (
    <table className="table table-striped table-hover">
      <PayeesGridHeader />
      <tbody>
        {payees.map(payee => (
          <PayeesGridRow payee={payee} />
        ))}
      </tbody>
    </table>
  );
};

const PayeesGridHeader = () => {
  return (
    <thead>
      <tr>
        <th>Payee Name</th>
        <th>City</th>
        <th>State</th>
      </tr>
    </thead>
  );
};

interface PayeesGridRowProps {
  payee: Payee;
}

const PayeesGridRow = ({ payee }: PayeesGridRowProps) => {
  return (
    <tr>
      <td>{payee.payeeName}</td>
      <td>{payee.address && payee.address.city}</td>
      <td>{payee.address && payee.address.state}</td>
    </tr>
  );
};

export default PayeesGrid;
