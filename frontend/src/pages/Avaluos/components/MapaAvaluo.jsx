import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix para los iconos de Leaflet en React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Componente interno para forzar el re-dibujado
function MapResizer() {
    const map = useMap();
    useEffect(() => {
        setTimeout(() => {
            map.invalidateSize(); // Esto quita el error de la "línea horizontal"
        }, 200);
    }, [map]);
    return null;
}

const MapaAvaluo = ({ onLocationSelect, initialCoords }) => {
    const [position, setPosition] = React.useState(initialCoords || { lat: 18.4861, lng: -69.9312 });

    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                setPosition(e.latlng);
                onLocationSelect({ latitud: e.latlng.lat, longitud: e.latlng.lng });
            },
        });
        return position ? <Marker position={position} /> : null;
    };

    return (
        <MapContainer 
            center={position} 
            zoom={13} 
            style={{ height: '100%', width: '100%', minHeight: '100%' }} // Asegura el alto
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapResizer />
            <LocationMarker />
        </MapContainer>
    );
};

export default MapaAvaluo;