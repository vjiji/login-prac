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
import Modal from "common/Modal";
import Button from "common/Button";

const Header = () => {
  const { user, status, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = user.id;

  useEffect(() => {
    if (!userId) {
      const token = Cookies.get("token");
      token ? dispatch(_getUserInfo()) : navigate("/login");
    }
  }, [user]);

  const handleModalClose = () => {
    dispatch(resetUserState());
    Cookies.remove("token");
    navigate("/login");
  };

  const logout = () => {
    Cookies.remove("token");
    window.location.reload();
  };

  const handleProfileButtonClick = () => {
    userId ? logout() : navigate("/login");
  };

  return (
    <>
      <HeaderLayout>
        <ProfileBox>
          {userId && <p>{`${userId} 님, 반가워요!`}</p>}
          <Button size="small" onClick={handleProfileButtonClick}>
            {userId ? "logout" : "login"}
          </Button>
        </ProfileBox>
      </HeaderLayout>
      {status === "failed" && (
        <Modal handleClose={handleModalClose}>
          <ModalContent>
            <p>{error}</p>
            <p>다시 로그인 해주세요.</p>
            <Button size="large" theme="worning" onClick={handleModalClose}>
              확인
            </Button>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Header;

const HeaderLayout = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
