import React, {FC} from 'react';

/**
 * Component props model.
 *
 * @prop {string | JSX.Element} title Text or element, displayed in the modal header.
 * @prop {Function} onModalClose Modal window close function.
 */
interface ModalHeaderProps {
  title: string | JSX.Element;
  onModalClose: () => void;
}

/**
 * Render modal window header.
 */
export const ModalHeader: FC<ModalHeaderProps> = ({title, onModalClose}) => (
  <div className="modal-header">
    <div className="modal-title">{title}</div>

    <button type="button" className="modal-close" onClick={onModalClose}>
      <span>×</span>
    </button>
  </div>
);
