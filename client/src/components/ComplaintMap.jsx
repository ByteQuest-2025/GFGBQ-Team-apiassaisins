import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function ComplaintMap({ areaData, center = [28.6139, 77.2090], zoom = 11 }) {
    // Define actual coordinates for different zones (example: Delhi coordinates)
    const zoneCoordinates = {
        'North Zone': [28.7041, 77.1025],
        'South Zone': [28.5355, 77.3910],
        'East Zone': [28.6692, 77.4538],
        'West Zone': [28.6358, 77.0299],
        'Central Zone': [28.6139, 77.2090]
    };

    // Get color based on complaint count
    const getMarkerColor = (count) => {
        if (count >= 3) return '#EF4444'; // Red - Critical
        if (count >= 2) return '#F59E0B'; // Orange - High
        if (count >= 1) return '#FCD34D'; // Yellow - Medium
        return '#10B981'; // Green - Safe
    };

    // Get radius based on total complaints
    const getMarkerRadius = (total) => {
        return 15 + (total * 3); // Base radius + scaling
    };

    return (
        <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200">
            <MapContainer
                center={center}
                zoom={zoom}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                {/* OpenStreetMap Tiles */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Markers for each zone */}
                {areaData.map((area, index) => {
                    const position = zoneCoordinates[area.area];
                    if (!position) return null;

                    return (
                        <CircleMarker
                            key={index}
                            center={position}
                            radius={getMarkerRadius(area.total)}
                            fillColor={getMarkerColor(area.highPriority)}
                            color="white"
                            weight={3}
                            opacity={1}
                            fillOpacity={0.7}
                        >
                            <Popup>
                                <div className="p-2">
                                    <h3 className="font-bold text-lg mb-2">{area.area}</h3>
                                    <div className="space-y-1 text-sm">
                                        <p><strong>Total Complaints:</strong> {area.total}</p>
                                        <p><strong className="text-red-600">High Priority:</strong> {area.highPriority}</p>
                                        <p><strong>Medium Priority:</strong> {area.mediumPriority || 0}</p>
                                        <p><strong>Low Priority:</strong> {area.lowPriority || 0}</p>
                                    </div>
                                </div>
                            </Popup>
                            <Tooltip direction="top" offset={[0, -10]} opacity={0.9}>
                                <div className="text-center">
                                    <strong>{area.area}</strong><br />
                                    {area.highPriority} high priority / {area.total} total
                                </div>
                            </Tooltip>
                        </CircleMarker>
                    );
                })}
            </MapContainer>
        </div>
    );
}

export default ComplaintMap;
