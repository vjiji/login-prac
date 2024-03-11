import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Cookies from "js-cookie";
import { LuHome } from "react-icons/lu";
import Button from "common/Button";
import { _getUserInfo, _loginUser } from "../../redux/modules/user";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const userId = user.id;

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
