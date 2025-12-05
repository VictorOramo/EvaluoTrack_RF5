import React, { useState } from 'react';
import FormularioSolicitante from './FormularioSolicitante';
import MapaUbicacion from './MapaUbicacion';
import SubidaArchivos from './SubidaArchivos';

const FichaTabs = () => {
  const [activeTab, setActiveTab] = useState('datos');

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'datos' ? 'active' : ''}`} 
            onClick={() => setActiveTab('datos')}>Datos Generales</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'mapa' ? 'active' : ''}`} 
            onClick={() => setActiveTab('mapa')}>Mapa & Ubicación</button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'anexos' ? 'active' : ''}`} 
            onClick={() => setActiveTab('anexos')}>Anexos</button>
        </li>
      </ul>

      <div className="tab-content border p-4 bg-light">
        {activeTab === 'datos' && <FormularioSolicitante />}
        {activeTab === 'mapa' && <MapaUbicacion />}
        {activeTab === 'anexos' && <SubidaArchivos />}
      </div>
    </div>
  );
};

export default FichaTabs;