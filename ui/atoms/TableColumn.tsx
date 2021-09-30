import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

type TableColumn = {
  children: ReactNode;
  className?: string;
};

const TableColumn: FunctionComponent<TableColumn> = ({
  children,
  className,
}) => {
  return <td className={clsx('py-3', 'px-6', className)}>{children}</td>;
};

export default TableColumn;
