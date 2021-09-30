import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

type ChipProps = {
  children: ReactNode;
  className?: string;
};

const Chip: FunctionComponent<ChipProps> = ({ children, className }) => {
  return (
    <>
      <span
        className={clsx('py-1', 'px-3', 'rounded-full', 'text-xs', className)}
      >
        {children}
      </span>
    </>
  );
};

export default Chip;
