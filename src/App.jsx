import Layout from "./pages/public/_layout";
import Informacion from "./pages/public/informacion";
import Inicio from "./pages/public/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./pages/public/contacto";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
