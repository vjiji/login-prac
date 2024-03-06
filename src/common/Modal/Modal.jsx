import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ children, handleClose }) => {
  return (
    <>
      {createPortal(
        <Layout>
          <ModalBackgrounds onClick={handleClose}></ModalBackgrounds>
          {children}
        </Layout>,
        document.body
      )}
    </>
  );
};

export default Modal;

const Layout = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBackgrounds = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(221, 221, 221, 0.8);
  z-index: 1;
`;
