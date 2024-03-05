import Header from "layout/Header";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div``;
