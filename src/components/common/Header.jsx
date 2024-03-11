import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import Button from "common/Button";
import { useHeader } from "hooks/common";

const Header = () => {
  const navigate = useNavigate();
  const { userId, logout } = useHeader();

  const handleHomeButtonClick = () => {
    userId ? navigate("/") : navigate("/login");
  };

  const handleProfileButtonClick = () => {
    userId ? logout() : navigate("/login");
  };

  return (
    <>
      <HeaderLayout>
        <div className="header__home-icon-box">
          <LuHome onClick={handleHomeButtonClick} />
        </div>
        <h1 onClick={handleHomeButtonClick}>MY DIARY</h1>
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
    padding: 20px;
    display: flex;
    align-items: center;
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
