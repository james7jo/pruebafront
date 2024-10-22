import React from 'react';
import '../section/Component.css'; 
import ninosJugando from '../images/ninosjugando.jpg';
import seguridaddeDatos from '../images/seguridaddedatos.png'
import comunidad from '../images/comunidad.png'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>¡Bienvenido a Pasitos!</h1>
        <p>Tu plataforma de gestión para la seguridad de los mas pequeños.</p>
        <p>En Pasitos, entendemos que la seguridad de los niños es la prioridad número uno. Por ello, ofrecemos un conjunto de características que permiten un monitoreo constante y una comunicación fluida entre padres y educadores. Desde la gestión de la asistencia hasta la programación de actividades educativas, nuestra plataforma se adapta a las necesidades específicas de cada comunidad educativa.</p>
        <a href="/signup" className="cta-button">Crear Cuenta</a>
      </header>
      
      <section className="features">
        <div className="feature">
          <img src={ninosJugando} alt="Niños jugando" className="feature-image" />
          <h2>Divertido y Educativo</h2>
          <p>Pasitos ofrece un entorno seguro y creativo para el aprendizaje de los más pequeños.</p>
        </div>
        <div className="feature">
          <img src={seguridaddeDatos} alt="Seguridad de datos" className="feature-image" />
          <h2>Datos Seguros</h2>
          <p>Protegemos la información de los niños y del kinder con las mejores prácticas en seguridad digital.</p>
        </div>
        <div className="feature">
          <img src={comunidad} alt="Comunidad" className="feature-image" />
          <h2>Comunidad</h2>
          <p>Conéctate con maestros para crear una experiencia educativa compartida.</p>
        </div>
      </section>
      
      <footer className="footer">
        <p>2024 Pasitos</p>
      </footer>
    </div>
  );
}

export default App;