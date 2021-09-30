import React, { FunctionComponent, ReactNode } from 'react';

type TableHeaderProps = {
  children: ReactNode;
};

const TableHeader: FunctionComponent<TableHeaderProps> = ({ children }) => {
  return (
    <thead>
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        {children}
      </tr>
    </thead>
  );
};

export default TableHeader;
