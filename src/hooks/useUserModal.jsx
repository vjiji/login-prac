import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useUserModal = () => {
  const [showModal, setShowModal] = useState(false);

  const { status } = useSelector((state) => state.user);

  const handleModalOpen = () => {
    status === "failed" || status === "succeeded"
      ? setShowModal(true)
      : setShowModal(false);
  };

  useEffect(() => {
    handleModalOpen();
  }, [status]);

  return { showModal };
};

export default useUserModal;
