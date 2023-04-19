import './App.css';
import Datos_pedido from './Component/Datos_pedido';
import Formulario_validacion from './Component/Formulario_validacion';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" Component={ Formulario_validacion } />
          <Route exact path="/pedido" element={<Datos_pedido />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
