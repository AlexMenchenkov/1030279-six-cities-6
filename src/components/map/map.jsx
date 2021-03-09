import PropTypes from "prop-types";
import React, {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {propTypesCard, propTypesMap} from '/src/prop-types.js';

const Map = (props) => {
  const mapRef = useRef();
  const {offers, iconData} = props;
  const points = offers.map((offer) => offer.location);
  const location = offers.map((offer) => offer.city.location);
  const coordinatesCity = location.filter(((offer) => ({id}) => !offer.has(id) && offer.add(id))(new Set()));

  const [latitude] = coordinatesCity.map((offer) => offer.latitude);
  const [longitude] = coordinatesCity.map((offer) => offer.longitude);
  const [zoom] = coordinatesCity.map((offer) => offer.zoom);
  const icon = leaflet.icon({
    ...iconData,
  });
  const widthMap = {
    width: `500px`,
  };

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: latitude,
        lng: longitude,
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
        lat: point.latitude,
        lng: point.longitude,
      },
      {
        icon,
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [coordinatesCity]);

  return (<>
    <div className="cities__right-section">
      <div id="map" style={widthMap} ref={mapRef} />
    </div>
  </>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  iconData: PropTypes.shape(
      propTypesMap,
  ).isRequired,
};

export default Map;
