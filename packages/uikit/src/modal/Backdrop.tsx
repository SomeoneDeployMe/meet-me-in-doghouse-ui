import React, {FC} from 'react';
import {Fade} from './Fade';

/**
 * Component props model.
 *
 * @prop {boolean} show Backdrop visibility flag.
 */
interface BackdropProps {
  show: boolean;
}

/**
 * Backdrop component. Renders semitransparent background.
 */
export const Backdrop: FC<BackdropProps> = ({show, ...restProps}) => (
  <Fade show={show} timeout={200} {...restProps}>
    <div className="modal-backdrop" />
  </Fade>
);
