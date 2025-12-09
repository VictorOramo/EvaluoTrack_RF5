import Leaflet from "leaflet"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"

// Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

Leaflet.Icon.Default.mergeOptions({
    iconUrl: "http://localhost:3001/assets/libs/leaflet/images/marker-icon.png",
    shadowUrl: "http://localhost:3001/assets/libs/leaflet/images/marker-shadow.png"
})

export const EcommerceMap = ({ style }: any) => {

    const lat = 51.505;
    const lng = -0.09;
    const zoom = 13;

    const position: any = [lat, lng];
    return (
        <MapContainer
            center={position}
            zoom={zoom}
            style={style}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
        </MapContainer>
    )
}