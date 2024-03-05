import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      <button onClick={() => navigate("/login")}>login</button>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  height: 100px;
  width: 100%;
  background: gray;
`;
