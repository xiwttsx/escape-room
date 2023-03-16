import {useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import useMap from 'hooks/use-map';
import { Location, CustomIcon, MapSize } from '../../const';

const Map = () => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, Location);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: Location.Latitude,
        lng: Location.Longitude,
      });
      marker.setIcon(CustomIcon).addTo(map);
    }
  },[map]);

  return (
    <section style={{height: MapSize.Height, width: MapSize.Width}} ref={mapRef} />
  );
};

export default Map;
