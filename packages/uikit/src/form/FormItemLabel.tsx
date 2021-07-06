import React, {FC} from 'react';
import {useFormContext} from './Form';
import {Col} from '../grid';

/**
 * Component props.
 *
 * @prop {string} label Form item label text.
 */
interface FormItemLabelProps {
  label: string;
}

/**
 * Renders form item label container. Grabs some form context props.
 */
export const FormItemLabel: FC<FormItemLabelProps> = ({label}) => {
  const context = useFormContext();

  return (
    <Col className="form-item-label" span={context?.labelCol?.span}>
      <label>{label}</label>
    </Col>
  );
};
