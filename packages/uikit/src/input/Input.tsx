import React, {ChangeEvent, FC, InputHTMLAttributes} from 'react';
import clsx from 'clsx';

/**
 * Component props model.
 *
 * @prop {Function} onChange Change handler.
 */
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Default props values.
 */
const defaultProps: Partial<InputProps> = {
  type: 'text',
};

/**
 * Standard input-field component.
 */
export const Input: FC<InputProps> = ({className, onChange, ...restProps}) => {
  const inputClassNames = clsx('dh-input', className);

  /**
   * Change handler. Retrieves value from event.target and passes resulting value plus original event to the given onChange.
   *
   * @param {ChangeEvent<HTMLInputElement>} event Original event.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value, event);
  };

  return <input className={inputClassNames} onChange={handleChange} {...restProps} />;
};

Input.defaultProps = defaultProps;
