import React from "react";
import {
  ContainerInicio,
  Header,
  Button,
  Feature,
  Features,
  Footer,
  H1,
  Img,
  Parrafo,
  ParrafoFeature,
  Titulo2,
} from "../../styles/inicioPublic";

const Inicio = () => {
  return (
    <ContainerInicio>
      <Header>
        <H1>¡Bienvenido a Pasitos!</H1>
        <Parrafo>
          Tu plataforma de gestión para la seguridad de los mas pequeños.
        </Parrafo>
        <ParrafoFeature>
          En Pasitos, entendemos que la seguridad de los niños es la prioridad
          número uno. Por ello, ofrecemos un conjunto de características que
          permiten un monitoreo constante y una comunicación fluida entre padres
          y educadores. Desde la gestión de la asistencia hasta la programación
          de actividades educativas, nuestra plataforma se adapta a las
          necesidades específicas de cada comunidad educativa.
        </ParrafoFeature>
        <Button>Crear Cuenta</Button>
      </Header>
      <Features>
        <Feature>
          <Img />
          <Titulo2>Divertido y Educativo</Titulo2>
          <Parrafo>
            Pasitos ofrece un entorno seguro y creativo para el aprendizaje de
            los más pequeños.
          </Parrafo>
        </Feature>
        <Feature>
          <Img />
          <Titulo2>Datos Seguros</Titulo2>
          <Parrafo>
            Protegemos la información de los niños y del kinder con las mejores
            prácticas en seguridad digital.
          </Parrafo>
        </Feature>
        <Feature>
          <Img />
          <Titulo2>Comunidad</Titulo2>
          <Parrafo>
            Conéctate con maestros para crear una experiencia educativa
            compartida.
          </Parrafo>
        </Feature>
      </Features>
      <Footer className="footer">
        <Parrafo>2024 Pasitos</Parrafo>
      </Footer>
    </ContainerInicio>
  );
};

export default Inicio;
