import styled from "styled-components";

export const ContainerInicio = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const Header = styled.header`
  background-color: #ffe4b5;
  padding: 3rem 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const H1 = styled.h1`
  color: #ff7b54;
  font-size: 3rem;
`;

export const Parrafo = styled.p`
  color: #555;
  font-size: 1.2rem;
`;
export const ParrafoFeature = styled.p`
  color: #555;
  font-size: 1.5rem;
  
`;

export const Button = styled.button`
  background-color: #ff7b54;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  margin-top: 1rem;
  display: inline-block;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ff5a36;
  }
`;
export const Features = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Feature = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 300px;
`;

export const Titulo2 = styled.h2`
  color: #ff7b54;
  font-size: 1.8rem;
`;

export const Img = styled.image`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;
export const Footer = styled.footer`
  background-color: #ff7b54;
  color: #fff;
  padding: 1rem;
  margin-top: 3rem;
  border-radius: 0 0 10px 10px;
`;
