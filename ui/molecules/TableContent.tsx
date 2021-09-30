import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

type TableContentProps = {
  children: ReactNode;
  className?: string;
};

const TableContent: FunctionComponent<TableContentProps> = ({
  children,
  className,
}) => {
  return (
    <tbody className={clsx('text-gray-600', 'text-sm', className)}>
      {children}
    </tbody>
  );
};

export default TableContent;
