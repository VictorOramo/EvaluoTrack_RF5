import React from 'react';

const SubidaArchivos = () => {
  return (
    <div className="mt-3 p-5 border border-primary rounded text-center" style={{ borderStyle: 'dashed' }}>
      <h5>Anexos y Planos</h5>
      <p className="text-muted">Arrastra tus archivos aquí o haz clic para subir</p>
      <input type="file" className="form-control" multiple />
    </div>
  );
};

export default SubidaArchivos;