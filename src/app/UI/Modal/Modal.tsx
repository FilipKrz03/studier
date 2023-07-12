import React from "react";
import classes from "./Modal.module.scss";

type BackdropProps = {
  onClose: () => void;
  isHigherOrder?:boolean , 
};

type ModalOverlayProps = {
  children: React.ReactNode;
  isHigherOrder?:boolean , 
};

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  isHigherOrder?:boolean , 
};

const ModalOverlay = ({ children , isHigherOrder }: ModalOverlayProps) => {

  return <div className={`${classes.modal} ${isHigherOrder ? classes['higher-order'] : ''} `}>{children}</div>;
};

const Backdrop = ({ onClose , isHigherOrder }: BackdropProps) => {
  return <div className={isHigherOrder ? '' : classes.backdrop} onClick={onClose}></div>;
};

const Modal = ({ children, onClose , isHigherOrder = false }: ModalProps) => {
  return (
    <>
      <Backdrop
        isHigherOrder = {isHigherOrder}
        onClose={() => {
          onClose();
        }}
      />
      <ModalOverlay isHigherOrder={isHigherOrder}>{children}</ModalOverlay>
    </>
  );
};

export default Modal;
