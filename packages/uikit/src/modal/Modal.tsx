import React, {FC, MouseEvent, useState} from 'react';
import {createPortal} from 'react-dom';
import {Backdrop} from './Backdrop';
import {Fade} from './Fade';
import {ModalHeader} from './ModalHeader';
import {ModalFooter} from './ModalFooter';

/**
 * Modal window props.
 *
 * @prop {string} title Text or element, displayed in the modal header.
 * @prop {JSX.Element | JSX.Element[]} footer Elements, displayed in the modal footer.
 * @prop {Function} onClose Close modal window callback function.
 * @prop {boolean} [show] Modal window visibility flag.
 */
interface ModalProps {
  title: string | JSX.Element;
  footer: JSX.Element | JSX.Element[];
  onClose: () => void;
  show?: boolean;
}

/**
 * Renders modal window.
 */
export const Modal: FC<ModalProps> = ({children, onClose, footer, title}) => {
  const container = document.getElementById('root');
  const [isVisible, setIsVisible] = useState(true);

  /**
   * Modal outside mouse click handler.
   *
   * @param {MouseEvent<HTMLDivElement>} event Mouse click event.
   */
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsVisible(false);
    }
  };

  /**
   * Modal close handler.
   */
  const handleModalClose = () => setIsVisible(false);

  return createPortal(
    <>
      <Backdrop show={isVisible} />
      <div className="modal" onClick={handleClick} role="dialog">
        <Fade show={isVisible} timeout={200} onExited={onClose} enter exit unmountOnExit>
          <div className="modal-dialog">
            <div className="modal-content">
              <ModalHeader title={title} onModalClose={handleModalClose} />
              <div className="modal-body">{children}</div>
              <ModalFooter>{footer}</ModalFooter>
            </div>
          </div>
        </Fade>
      </div>
    </>,
    container
  );
};
