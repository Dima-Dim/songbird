import * as React from "react";
import {modalSC as SC} from "./sc";

interface ModalProps {

}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    children,
  } = props;

  const [isOpen, setOpen] = React.useState(true);

  const handleOverlayClick = (evt: React.MouseEvent<HTMLElement>) => {
    if (evt.currentTarget === evt.target) {
      setOpen(false);
    }
  };

  return (
    <>
      {isOpen
        ? (
          <SC.OVERLAY
            onClick={handleOverlayClick}
          >
            {children}
          </SC.OVERLAY>
        )
        : <></>}
    </>
  );
};

export default Modal;
