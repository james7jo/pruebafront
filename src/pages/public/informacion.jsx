import React from "react";
import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff8f5;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 80px 20px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #ff7b54;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled.h2`
  color: #ff7b54;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin: 0 auto 1.5rem;
`;

export const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(255, 123, 84, 0.1);
  margin: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Button = styled.button`
  background: #ff7b54;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff9b7d;
    transform: translateY(-2px);
  }
`;

const Informacion = () => {
  return (
    <Container>
      <Section>
        <Title>Sobre Pasitos</Title>
        <Text>
          Pasitos es una plataforma innovadora diseñada específicamente para 
          facilitar la gestión de jardines infantiles y guarderías, priorizando 
          la seguridad y el desarrollo de los niños.
        </Text>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          padding: '2rem' 
        }}>
          <Card>
            <Subtitle>Nuestra Misión</Subtitle>
            <Text>
              Proporcionar herramientas tecnológicas que mejoren la comunicación 
              entre educadores y padres, garantizando un ambiente seguro y 
              educativo para cada niño.
            </Text>
          </Card>

          <Card>
            <Subtitle>Nuestra Visión</Subtitle>
            <Text>
              Ser la plataforma líder en gestión educativa infantil, 
              transformando la manera en que los centros educativos administran 
              sus operaciones diarias.
            </Text>
          </Card>

          <Card>
            <Subtitle>Valores</Subtitle>
            <Text>
              • Seguridad ante todo<br/>
              • Innovación continua<br/>
              • Compromiso educativo<br/>
              • Transparencia
            </Text>
          </Card>
        </div>
      </Section>
    </Container>
  );
};

export default Informacion;