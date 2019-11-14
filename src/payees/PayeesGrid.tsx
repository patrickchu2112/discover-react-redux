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
  sortPayees: (sortField: string) => void;
}

const PayeesGrid = ({ payees, columnConfig, sortPayees }: PayeesGridProps) => {
  return (
    <table className="table table-striped table-hover">
      <PayeesGridHeader columnConfig={columnConfig} sortPayees={sortPayees}/>
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

type PayeesGridHeaderProps = Pick<
  PayeesGridProps,
  'columnConfig' | 'sortPayees'
>;

const PayeesGridHeader = ({
  columnConfig,
  sortPayees,
}: PayeesGridHeaderProps) => {
  return (
    <thead>
      <tr>
        {columnConfig.map(column => (
          <th key={column.field} onClick={() => sortPayees(column.field)}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

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
