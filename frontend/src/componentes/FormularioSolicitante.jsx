import React, { useState } from 'react';
import axios from 'axios';

const FormularioSolicitante = () => {
  const [form, setForm] = useState({ nombre: '', cedula: '', telefono: '' });

  const enviarDatos = async (e) => {
    e.preventDefault();
    try {
      // Conexión con el Backend de Derling
      const respuesta = await axios.post('http://localhost:5000/api/expedientes/crear', form);
      alert(respuesta.data.mensaje);
    } catch (error) {
      console.error("Error conectando al servidor", error);
      alert("Error: Asegúrate que el backend esté corriendo en puerto 5000");
    }
  };

  return (
    <form onSubmit={enviarDatos} className="mt-3">
      <h4>Datos del Solicitante</h4>
      <div className="mb-3">
        <label>Nombre:</label>
        <input className="form-control" type="text" 
          onChange={(e) => setForm({...form, nombre: e.target.value})} required />
      </div>
      <div className="mb-3">
        <label>Cédula:</label>
        <input className="form-control" type="text" 
          onChange={(e) => setForm({...form, cedula: e.target.value})} required />
      </div>
      <button type="submit" className="btn btn-success">Guardar Expediente</button>
    </form>
  );
};

export default FormularioSolicitante;