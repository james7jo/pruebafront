import React, { useState } from "react";

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
export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ff7b54;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #ffe5dc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff7b54;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #ffe5dc;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff7b54;
  }
`;

export const ContactInfo = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 123, 84, 0.05);
  border-radius: 12px;
`;

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Section>
        <Title>Contáctanos</Title>
        <Text>
          ¿Tienes preguntas sobre Pasitos? Estamos aquí para ayudarte.
        </Text>

        <Card style={{ maxWidth: "600px", margin: "2rem auto" }}>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nombre</Label>
              <Input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Mensaje</Label>
              <Textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <Button type="submit">Enviar Mensaje</Button>
          </form>
        </Card>

        <ContactInfo>
          <Subtitle>Información de Contacto</Subtitle>
          <Text>
            Email: info@pasitos.com
            <br />
            Teléfono: (123) 456-7890
            <br />
            Horario: Lunes a Viernes, 9:00 AM - 6:00 PM
          </Text>
        </ContactInfo>
      </Section>
    </Container>
  );
};

export default Contacto;
