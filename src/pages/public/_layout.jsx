import React from "react";
import Nav from "../../components/nav";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <ContainerLayour>
      <Nav />
      <DivOutled>
        <Outlet />
      </DivOutled>
    </ContainerLayour>
  );
};

export default Layout;
const ContainerLayour = styled.div`
  width: 100vw;
  height: 100vh;
`;
const DivOutled = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
`;
