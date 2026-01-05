import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const AvaluosService = {
    
    getExpedientes: (page = 1, limit = 10) => 
        axios.get(`${API_URL}/expedientes?page=${page}&limit=${limit}`),
    
    getExpedienteById: (id) => 
        axios.get(`${API_URL}/expedientes/${id}`),
    
    crearExpediente: (data) => 
        axios.post(`${API_URL}/expedientes`, data),

    
    getFichaByExpediente: (expedienteId) => 
        axios.get(`${API_URL}/fichas/expediente/${expedienteId}`),
    
    actualizarFicha: (id, data) => 
        axios.put(`${API_URL}/fichas/${id}`, data),

    
    crearAnexo: (data) => 
        axios.post(`${API_URL}/anexos`, data),

    
    agregarCoordenadas: (anexoId, coords) => 
        axios.post(`${API_URL}/anexos/${anexoId}/coordenadas`, coords),

    getAnexos: (expedienteId) => 
        axios.get(`${API_URL}/anexos/expediente/${expedienteId}`),
};