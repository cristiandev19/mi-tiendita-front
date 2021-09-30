import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

type TableRow = {
  children: ReactNode;
  className?: string;
};

const TableRow: FunctionComponent<TableRow> = ({ children, className }) => {
  return (
    <tr className={clsx('border-b', 'border-gray-200', className)}>
      {children}
    </tr>
  );
};

export default TableRow;
