import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <ContainerNav>
      <NavContent>
        <NavLink
          to="/"
          active={activeLink === "/"}
          onClick={() => setActiveLink("/")}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/informacion"
          active={activeLink === "/informacion"}
          onClick={() => setActiveLink("/informacion")}
        >
          Información
        </NavLink>
        <NavLink
          to="/contacto"
          active={activeLink === "/contacto"}
          onClick={() => setActiveLink("/contacto")}
        >
          Contacto
        </NavLink>
      </NavContent>
    </ContainerNav>
  );
};

export default Nav;

const ContainerNav = styled.nav`
  width: 100%;
  height: 60px;
  background: #fff8f5; /* Fondo cálido muy suave */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(255, 123, 84, 0.1);
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(255, 123, 84, 0.15);
  }
`;

const NavContent = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 60px;
  position: relative;
  padding: 0 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#ff7b54" : "#ff9b7d")};
  padding: 8px 12px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #ff7b54;
    transform: translateY(-1px);
    &::before {
      opacity: 0.1;
      transform: scaleX(1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ff7b54;
    border-radius: 8px;
    opacity: 0;
    transform: scaleX(0.8);
    transition: all 0.3s ease;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ff7b54;
    transform: scaleX(${(props) => (props.active ? 1 : 0)});
    transition: transform 0.3s ease;
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  bottom: -2px;
  height: 2px;
  width: 60px;
  background-color: #ff7b54;
  transition: all 0.3s ease;
  transform: translateX(
    ${(props) => {
      switch (props.activeLink) {
        case "/":
          return "0px";
      }
    }}
  );

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #ff7b54, #ff9b7d);
    opacity: 0.8;
    filter: blur(2px);
  }
`;
