import React, {FC} from 'react';

type ButtonProps = {
  htmlType?: React.ButtonHTMLAttributes<any>['type'];
};

const defaultProps: Partial<ButtonProps> = {
  htmlType: 'button',
};

export const Button: FC<ButtonProps> = ({children, htmlType}) => {
  return (
    <button type={htmlType} className="btn">
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
