import React from "react";
import classes from "./Modal.module.scss";

type BackdropProps = {
  onClose: () => void;
};

type ModalOverlayProps = {
  children: React.ReactNode;
};

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return <div className={classes.modal}>{children}</div>;
};

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <>
      <Backdrop
        onClose={() => {
          onClose();
        }}
      />
      <ModalOverlay>{children}</ModalOverlay>
    </>
  );
};

export default Modal;
