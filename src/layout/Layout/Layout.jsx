import Auth from "components/common/Auth";
import Header from "layout/Header";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Layout = () => {
  return (
    <Container>
      <Auth />
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
  margin: 60px 0;
`;
