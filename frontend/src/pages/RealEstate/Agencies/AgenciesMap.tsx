import Leaflet from "leaflet"
import {
    Circle,
    FeatureGroup,
    LayerGroup,
    MapContainer,
    Popup,
    Polygon,
    TileLayer,
} from "react-leaflet"
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet"

// delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const polygons: any = [
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]

const AgenciesMap = () => {
    let lat = 51.508;
    let lng = -0.11;
    let zoom = 13;
    return (
        <MapContainer
            center={[lat, lng]}
            zoom={zoom}
            style={{ height: "300px" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
                <Circle center={[lat, lng]} fillColor="0ab39c" color=" 0ab39c" radius={500} />
                <Circle
                    center={[lat, lng]}
                    color='#0ab39c'
                    fillColor='#0ab39c'
                    radius={500}
                />
                <LayerGroup>
                    <Circle
                        center={[51.508, -0.11]}
                        color='#0ab39c'
                        fillColor='#0ab39c'
                        fillOpacity={0.5}
                        radius={500}
                    />
                </LayerGroup>
            </LayerGroup>
            <FeatureGroup>
                <Popup><b>Hello world!</b><br />I am a popup</Popup>
                <Circle center={[51.508, -0.11]} radius={500} color="0ab39c" />
                <Polygon
                    positions={polygons}
                    color='#405189'
                    fillColor='#405189' />
            </FeatureGroup>
        </MapContainer>
    );
}

export default AgenciesMap;