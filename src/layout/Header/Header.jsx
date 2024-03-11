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
import { LuHome } from "react-icons/lu";

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
    // navigate("/login");  to do : 회원가입, 로그인 페이지와 연결되어 있음
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
        <div className="header__home-icon-box">
          <LuHome
            onClick={() => (userId ? navigate("/") : navigate("/login"))}
          />
        </div>
        <h1 onClick={() => (userId ? navigate("/") : navigate("/login"))}>
          MY DIARY
        </h1>
        <ProfileBox>
          {userId && <p>{`${userId} 님, 반가워요!`}</p>}
          <Button
            theme="secondary"
            size="small"
            onClick={handleProfileButtonClick}
          >
            {userId ? "logout" : "login"}
          </Button>
        </ProfileBox>
      </HeaderLayout>
      {/* {status === "failed" && (
        <Modal handleClose={handleModalClose}>
          <ModalContent>
            <p>{error}</p>
            <p>다시 로그인 해주세요.</p>
            <Button size="large" theme="worning" onClick={handleModalClose}>
              확인
            </Button>
          </ModalContent>
        </Modal>
      )} */}
    </>
  );
};

export default Header;

const HeaderLayout = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
    font-size: 22px;
  }

  .header__home-icon-box {
    width: 300px;
  }

  h1 {
    font-weight: 600;
    cursor: pointer;
  }
`;

const ProfileBox = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
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
