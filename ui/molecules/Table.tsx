import React, { FunctionComponent } from 'react';

type TableProps = {
  children?: React.ReactNode;
};

const Table: FunctionComponent<TableProps> = ({ children }) => {
  return <table className="min-w-max w-full table-auto">{children}</table>;
};

export default Table;
