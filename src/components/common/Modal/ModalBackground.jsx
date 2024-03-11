import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalBackground = ({ onModal, handleModalClose, children }) => {
  if (!onModal) return null;

  return (
    <>
      {createPortal(
        <Layout>
          <ModalBackgrounds onClick={handleModalClose}></ModalBackgrounds>
          <ModalContent>{children}</ModalContent>
        </Layout>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default ModalBackground;

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

const ModalContent = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;
