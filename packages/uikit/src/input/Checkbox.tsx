import React, {ChangeEvent, FC, InputHTMLAttributes, SyntheticEvent, useState} from 'react';
import clsx from 'clsx';

/**
 * Checkbox component props.
 *
 * @prop {boolean} checked Is checkbox checked flag.
 * @prop {Function} onChange Checked prop change callback. Additionally, component passes original event.
 */
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean, event?: SyntheticEvent<HTMLInputElement>) => void;
}

/**
 * Renders standard checkbox.
 */
export const Checkbox: FC<CheckboxProps> = ({checked, children, onChange, ...restProps}) => {
  const [isChecked, setIsChecked] = useState(!!checked);

  /**
   * Change handler.
   *
   * @param {ChangeEvent<HTMLInputElement>} event Original event.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCheckedValue = event.target.checked;

    setIsChecked(newCheckedValue);

    onChange?.(newCheckedValue, event);
  };

  /**
   * Build CSS-classes string.
   */
  const classesString = clsx('checkbox', isChecked && 'checkbox-checked');

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="checkbox-container">
      <span className={classesString}>
        <input type="checkbox" className="checkbox-input" checked={isChecked} onChange={handleChange} {...restProps} />
        <span className="checkbox-custom" />
      </span>

      {children && <span>{children}</span>}
    </label>
  );
};
