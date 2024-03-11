import Button from "../Button";
import ModalBackground from "./ModalBackground";

const TwoButtonModal = ({
  onModal,
  message,
  handleConfirmButtonClick,
  handleModalClose,
}) => {
  return (
    <ModalBackground onModal={onModal} handleModalClose={handleModalClose}>
      <p>{message}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          onClick={handleConfirmButtonClick}
          theme={"worning"}
          className={"outlined"}
        >
          확인
        </Button>
        <Button onClick={handleModalClose} theme={"secondary"}>
          취소
        </Button>
      </div>
    </ModalBackground>
  );
};

export default TwoButtonModal;
