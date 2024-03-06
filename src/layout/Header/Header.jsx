import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  _getUserInfo,
  _loginUser,
  resetUserState,
} from "../../redux/modules/user";
import styled from "styled-components";
import { Modal } from "common/Modal";

const Header = () => {
  const { user, status, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.id) {
      const token = Cookies.get("token");
      token ? dispatch(_getUserInfo()) : navigate("/login");
    }
  }, [user]);

  const handleModalClose = () => {
    dispatch(resetUserState());
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <HeaderLayout>
      <button onClick={() => navigate("/login")}>
        {user.id ? "logout" : "login"}
      </button>
      {status === "failed" && (
        <Modal handleClose={handleModalClose}>
          <ModalContent>
            <p>{error}</p>
            <p>다시 로그인 해주세요.</p>
            <button onClick={handleModalClose}>확인</button>
          </ModalContent>
        </Modal>
      )}
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  height: 100px;
  width: 100%;
  background: gray;
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
  z-index: 2;
`;
