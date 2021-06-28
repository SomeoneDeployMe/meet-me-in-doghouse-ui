import React, {FC, HTMLAttributes} from 'react';
import clsx from 'clsx';

interface RowProps extends HTMLAttributes<HTMLDivElement> {}

export const Row: FC<RowProps> = ({className, children, ...restProps}) => {
  const rowClassNames = clsx('dh-row', className);

  return (
    <div className={rowClassNames} {...restProps}>
      {children}
    </div>
  );
};
