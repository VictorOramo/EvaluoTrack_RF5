import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FichaTabs from './componentes/FichaTabs';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sistema de Gestión Catastral</h1>
      <div className="card">
        <div className="card-body">
          {/* El componente de Jordanis contiene a los demás */}
          <FichaTabs />
        </div>
      </div>
    </div>
  );
}

export default App;