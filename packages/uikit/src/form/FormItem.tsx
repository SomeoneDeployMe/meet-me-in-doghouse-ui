import React, {FC} from 'react';

/**
 * Component props model.
 *
 * @prop {string} [label] Label text.
 */
interface FormItemProps {
  label?: string;
}

/**
 * Renders form unit - group of label and control.
 */
export const FormItem: FC<FormItemProps> = ({label, children}) => (
  <div className="form-item">
    {label && (
      <div className="form-item-label">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>{label}</label>
      </div>
    )}

    <div className="form-item-control">{children}</div>
  </div>
);
