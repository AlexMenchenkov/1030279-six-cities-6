import PropTypes from "prop-types";
import React, {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {propTypesMap} from '/src/prop-types.js';

const Map = (props) => {
  const mapRef = useRef();
  // eslint-disable-next-line react/prop-types
  const {points, iconData, cityDataDefault: {zoom, width}, coord} = props;
  const {lat, lng} = coord;
  const icon = leaflet.icon({
    ...iconData,
  });

  useEffect(() => {
    if (document.getElementById(`map`).hasChildNodes()) {
      mapRef.current.remove();
    }
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat,
        lng,
      },
      zoom,
      zoomControl: false,
      marker: true,
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach((point) => {

      leaflet.marker({
        lat: point.lat,
        lng: point.lng,
      },
      {
        icon,
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);

      return () => {
        mapRef.current.remove();
      };
    });
  }, [coord]);

  return (<>
    <div className="cities__right-section">
      <div id="map" style={{width}} ref={mapRef} />
    </div>
  </>
  );
};

Map.propTypes = {
  iconData: PropTypes.shape(
      propTypesMap.icon,
  ),
  cityDataDefault: PropTypes.shape(
      propTypesMap.city,
  ),
  coord: PropTypes.object.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  points: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesMap.points,
      ),
  ).isRequired,
};

export default Map;
