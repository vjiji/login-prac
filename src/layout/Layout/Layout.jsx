import Header from "layout/Header";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Layout = () => {
  return (
    <Container>
      <Header />
      <BodyLayout>
        <Outlet />
      </BodyLayout>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BodyLayout = styled.div`
  margin-top: 60px;
`;
