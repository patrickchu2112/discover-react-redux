import React from 'react';
import * as lodash from 'lodash';
import { Payee } from './payee-types';

export interface ColumnConfig {
  field: string;
  label: string;
}

interface PayeesGridProps {
  payees: Payee[];
  columnConfig: ColumnConfig[];
}

const PayeesGrid = ({ payees, columnConfig }: PayeesGridProps) => {
  return (
    <table className="table table-striped table-hover">
      <PayeesGridHeader columnConfig={columnConfig} />
      <tbody>
        {payees.map(payee => (
          <PayeesGridRow
            payee={payee}
            key={payee.id}
            columnConfig={columnConfig}
          />
        ))}
      </tbody>
    </table>
  );
};

/* interface PayeesGridHeaderProps {
  columns: ColumnConfig[];
}
 */

type PayeesGridHeaderProps = Pick<PayeesGridProps, 'columnConfig'>;

const PayeesGridHeader = ({ columnConfig }: PayeesGridHeaderProps) => {
  return (
    <thead>
      <tr>
        {columnConfig.map(column => (
          <th key={column.field}>{column.label}</th>
        ))}
      </tr>
    </thead>
  );
};

/* interface PayeesGridRowProps {
  payee: Payee;
}
 */
/*
 interface PayeeProp {
  payee: Payee;
}
*/

// type PayeesGridRowProps = Pick<PayeesGridProps, 'columnConfig'> & PayeeProp;

interface PayeesGridRowProps extends Pick<PayeesGridProps, 'columnConfig'> {
  payee: Payee;
}

const PayeesGridRow = ({ payee, columnConfig }: PayeesGridRowProps) => {
  return (
    <tr>
      {columnConfig.map(column => (
        <td key={column.field}>{lodash.get(payee, column.field)}</td>
      ))}
    </tr>
  );
};

export default PayeesGrid;
