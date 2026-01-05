import React from 'react';

const AvaluosList = ({ expedientes, onSelect }) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">No. Expediente</th>
                        <th className="px-6 py-3">Solicitante</th>
                        <th className="px-6 py-3">Provincia</th>
                        <th className="px-6 py-3">Estado</th>
                        <th className="px-6 py-3">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {expedientes.map((exp) => (
                        <tr key={exp.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{exp.numeroExpediente}</td>
                            <td className="px-6 py-4">{exp.nombreSolicitante}</td>
                            <td className="px-6 py-4">{exp.provincia}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                    exp.estado === 'APROBADO' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {exp.estado}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <button 
                                    onClick={() => onSelect(exp)}
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Ver Detalle
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AvaluosList;