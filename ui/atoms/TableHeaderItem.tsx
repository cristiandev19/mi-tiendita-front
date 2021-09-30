import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

type TableHeaderItemProps = {
  children: ReactNode;
  className?: string;
};

const TableHeaderItem: FunctionComponent<TableHeaderItemProps> = ({
  children,
  className,
}) => {
  return <th className={clsx('py-3', 'px-6', className)}>{children}</th>;
};

export default TableHeaderItem;
