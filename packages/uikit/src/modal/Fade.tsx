import {CSSTransition} from 'react-transition-group';
import React, {FC} from 'react';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';

/**
 * Component props model.
 *
 * @prop {boolean} show Component visibility flag. Used as value for CSSTransition "in" prop and starts animation.
 */
interface FadeProps extends Omit<CSSTransitionProps, 'appear, in'> {
  show: boolean;
}

/**
 * Configured react CSSTransition component wrapper.
 */
export const Fade: FC<FadeProps> = ({children, show, timeout, ...restProps}) => (
  <CSSTransition
    appear
    in={!!show}
    timeout={timeout}
    classNames={{
      enter: 'enter',
      appear: 'enter',
      enterActive: 'fading-in',
      appearActive: 'fading-in',
      exitActive: 'fading-out',
      exit: 'exit',
    }}
    {...restProps}
  >
    {children}
  </CSSTransition>
);
