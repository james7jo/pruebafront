// CrearCuentaForm.jsx
import React from 'react';

const CrearCuentaForm = () => {
  return (
    <div className="crear-cuenta-container">
      <h2>Crear Cuenta</h2>
      <form>
        <div>
          <label>Nombre de Usuario:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
};

export default CrearCuentaForm;
