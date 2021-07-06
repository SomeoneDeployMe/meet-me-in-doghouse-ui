import React, {FC} from 'react';
import {useFormContext} from './Form';
import {Col} from '../grid';

interface FormItemControlProps {}

/**
 * Renders form item control container. Grabs some form context props.
 */
export const FormItemControl: FC<FormItemControlProps> = ({children}) => {
  const context = useFormContext();

  return (
    <Col span={context?.controlCol?.span} className="form-item-control">
      {children}
    </Col>
  );
};
