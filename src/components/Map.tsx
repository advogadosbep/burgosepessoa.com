import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

function Map() {
    const position: LatLngExpression = [-8.116447552316513, -34.90271881773779];
    return (
        <MapContainer center={position} zoom={17} scrollWheelZoom={false} className='h-60 lg:h-auto w-full lg:w-1/2 z-10'>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>Sua empresa está aqui!</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;
