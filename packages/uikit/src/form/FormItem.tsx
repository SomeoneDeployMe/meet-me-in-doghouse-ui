import React, {FC} from 'react';
import {FormItemLabel} from './FormItemLabel';
import {Row} from '../grid';
import {FormItemControl} from './FormItemControl';

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
  <Row className="form-item">
    {label && <FormItemLabel label={label} />}

    <FormItemControl>{children}</FormItemControl>
  </Row>
);
