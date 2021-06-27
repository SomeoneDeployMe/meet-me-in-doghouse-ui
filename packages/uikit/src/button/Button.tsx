import React, {FC, forwardRef} from 'react';
import clsx from 'clsx';

/**
 * Component props model.
 *
 * @prop {boolean} [primary] Mark the button as "primary" (filled by color).
 * @prop {'danger' | 'success' | 'warning'} [severity] Define button severity (affects its color).
 */
type ButtonProps = {
  primary?: boolean;
  severity?: 'danger' | 'success' | 'warning';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Default props values.
 */
const defaultProps: Partial<ButtonProps> = {
  type: 'button',
};

/**
 * Button component
 */
export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({children, primary, severity, className, ...restProps}, ref) => {
  const btnClassNames = clsx('dh-btn', primary && 'dh-btn-primary', severity && `dh-btn-${severity}`, className);

  return (
    <button ref={ref} className={btnClassNames} {...restProps}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
Button.defaultProps = defaultProps;
