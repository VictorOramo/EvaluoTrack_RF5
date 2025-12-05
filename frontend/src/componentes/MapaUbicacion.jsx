import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para el icono por defecto de leaflet en React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow });
L.Marker.prototype.options.icon = DefaultIcon;

const ClickHandler = ({ setCoords }) => {
  useMapEvents({
    click(e) {
      setCoords(e.latlng);
    },
  });
  return null;
};

const MapaUbicacion = () => {
  const [coords, setCoords] = useState(null);

  return (
    <div className="mt-3">
      <h4>Geolocalización del Predio</h4>
      <p>Coordenadas seleccionadas: {coords ? `${coords.lat}, ${coords.lng}` : "Haga clic en el mapa"}</p>
      
      <MapContainer center={[18.7357, -70.1627]} zoom={8} style={{ height: "400px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ClickHandler setCoords={setCoords} />
        {coords && <Marker position={coords} />}
      </MapContainer>
    </div>
  );
};

export default MapaUbicacion;