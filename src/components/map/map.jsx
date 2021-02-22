import React, {useRef, useEffect} from 'react';
import {iconData} from '/src/consts.js';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {cityDataDefault} from '/src/mocks/points.js';

const Map = (props) => {
  const mapRef = useRef();
  const {zoom, ...cityDefault} = cityDataDefault;
  const {cityData = cityDefault} = props;
  const icon = leaflet.icon({
    ...iconData,
  });

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: cityData.lat,
        lng: cityData.lng,
      },
      zoom,
      zoomControl: false,
      marker: true
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    leaflet.marker({
      lat: cityData.lat,
      lng: cityData.lng,
      title: `dsfsdf`,
    },
    {
      icon,
    })
      .addTo(mapRef.current)
      .bindPopup(cityData.title);

    return () => {
      mapRef.current.remove();
    };

  }, []);

  return (<>
    <div className="cities__right-section">
      <div id="map" style={{width: `500px`}} ref={mapRef} />
    </div>
  </>
  );
};

export default Map;
