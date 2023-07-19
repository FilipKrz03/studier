import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.scss";

type BackdropProps = {
  onClose: () => void;
  isHigherOrder: boolean;
};

type ModalOverlayProps = {
  children: React.ReactNode;
  isHigherOrder: boolean;
};

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  isHigherOrder?: boolean;
};

const ModalOverlay = ({ children, isHigherOrder }: ModalOverlayProps) => {
  return (
    <div
      className={`${classes.modal} ${
        isHigherOrder ? classes["higher-order"] : ""
      } `}
    >
      {children}
    </div>
  );
};

const Backdrop = ({ onClose, isHigherOrder }: BackdropProps) => {
  return (
    <div
      className={isHigherOrder ? "" : classes.backdrop}
      onClick={onClose}
    ></div>
  );
};

const portalEl = document.getElementById("overlays")!;

const Modal = ({ children, onClose, isHigherOrder = false }: ModalProps) => {
  return (
    <>
      {createPortal(
        <Backdrop
          isHigherOrder={isHigherOrder}
          onClose={() => {
            onClose();
          }}
        />,
        portalEl
      )}
      {createPortal(
        <ModalOverlay isHigherOrder={isHigherOrder}>{children}</ModalOverlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
