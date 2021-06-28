import React, {FC, HTMLAttributes} from 'react';
import clsx from 'clsx';

/**
 * Component props model.
 *
 * @prop {number} [span]
 */
interface ColProps extends HTMLAttributes<HTMLDivElement> {
  span?: number;
}

/**
 * Grid column component
 */
export const Col: FC<ColProps> = ({span, children, className, ...restProps}) => {
  const colClassnames = clsx(span ? `dh-col-${span}` : 'dh-col', className);

  return (
    <div className={colClassnames} {...restProps}>
      {children}
    </div>
  );
};
