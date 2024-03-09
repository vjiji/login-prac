import Button from "common/Button";
import ModalBackground from "./ModalBackground";

const OneButtonModal = () => {
  return (
    <ModalBackground onModal={onModal} handleModalClose={handleModalClose}>
      <p>{message}</p>
      <Button onClick={handleModalClose} theme={"secondary"}>
        취소
      </Button>
    </ModalBackground>
  );
};

export default OneButtonModal;
