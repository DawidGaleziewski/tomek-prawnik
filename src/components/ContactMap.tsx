// src/pages/map.js
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}

const GEOLOCATION = {
  lat: 52.17612,
  long: 20.80418,
}
export const ContactMap = () => {
  const hasMounted = useHasMounted()
  return (
    <div>
      {hasMounted && (
        <MapContainer
          center={[GEOLOCATION.lat, GEOLOCATION.long]}
          zoom={23}
          style={{ height: '400px' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[GEOLOCATION.lat, GEOLOCATION.long]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  )
}

export default Map
