import React, { useState, useEffect } from 'react';
import { AvaluosService } from './AvaluosService';
import AvaluosList from './AvaluosList';

const AvaluosPage = () => {
    const [expedientes, setExpedientes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarExpedientes();
    }, []);

    const cargarExpedientes = async () => {
        try {
            const response = await AvaluosService.getExpedientes();
            setExpedientes(response.data.data);
        } catch (error) {
            console.error("Error cargando expedientes:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Gestión de Avalúos</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Nuevo Expediente
                </button>
            </header>

            {loading ? (
                <p>Cargando expedientes...</p>
            ) : (
                <AvaluosList expedientes={expedientes} />
            )}
        </div>
    );
};

export default AvaluosPage;