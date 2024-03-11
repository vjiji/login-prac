import Button from "common/Button";
import ModalBackground from "./ModalBackground";

const OneButtonModal = ({
  onModal,
  message,
  theme,
  className,
  handleButtonClick,
}) => {
  return (
    <ModalBackground onModal={onModal} handleModalClose={handleButtonClick}>
      <p
        style={{
          textAlign: "center",
          whiteSpace: "pre-line",
          lineHeight: "1.5",
        }}
      >
        {message}
      </p>
      <Button onClick={handleButtonClick} theme={theme} className={className}>
        확인
      </Button>
    </ModalBackground>
  );
};

export default OneButtonModal;
