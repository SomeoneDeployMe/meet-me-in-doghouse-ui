import React, {createContext, FC, useContext, useMemo} from 'react';
import clsx from 'clsx';
import {ColProps} from '../grid/Col';

/**
 * Form context props.
 *
 * @prop {ColProps} [labelCol] Form item label container column configuration.
 * @prop {ColProps} [controlCol] Form item control container column configuration.
 */
interface FormContextProps {
  labelCol?: ColProps;
  controlCol?: ColProps;
}

/**
 * Form context on its own.
 */
export const FormContext = createContext<FormContextProps | undefined>(undefined);

/**
 * Hook, that simplifying access to form context.
 */
export const useFormContext = () => useContext(FormContext);

/**
 * Form component props. Extends form context props.
 *
 * @prop {'vertical' | 'horizontal'} [layout] Form layout type (affects label and control positioning).
 */
interface FormProps extends FormContextProps {
  layout?: 'vertical' | 'horizontal';
}

/**
 * Component props default values.
 */
const defaultProps: Partial<FormProps> = {
  layout: 'vertical',
};

/**
 * Renders form.
 */
export const Form: FC<FormProps> = ({children, labelCol, controlCol, layout}) => {
  const contextValue = useMemo(
    () => ({
      labelCol,
      controlCol,
    }),
    [labelCol, controlCol]
  );

  const classNames = clsx('form', layout === 'vertical' && 'form-vertical', layout === 'horizontal' && 'form-horizontal');

  return (
    <FormContext.Provider value={contextValue}>
      <form className={classNames}>{children}</form>
    </FormContext.Provider>
  );
};

Form.defaultProps = defaultProps;
