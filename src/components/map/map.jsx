import PropTypes from "prop-types";
import React, {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {propTypesCard} from '/src/prop-types.js';
import {connect} from "react-redux";
import {iconData, iconDataOrange, ONE, ZERO} from '/src/consts.js';

const Map = ({offers, currentOffer}) => {
  const mapRef = useRef(null);
  const points = offers.map((offer) => [offer.location, {id: offer.id}]);
  const location = offers.map((offer) => offer.city.location);
  const titles = offers.map((offer) => offer.title);
  const coordinatesCity = location.filter(((offer) => ({id}) => !offer.has(id) && offer.add(id))(new Set()));
  let icon;
  const [latitude] = coordinatesCity.map((offer) => offer.latitude);
  const [longitude] = coordinatesCity.map((offer) => offer.longitude);
  const [zoom] = coordinatesCity.map((offer) => offer.zoom);

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

    points.forEach((point, index) => {
      if (point[ONE].id === currentOffer) {
        icon = leaflet.icon({
          ...iconDataOrange,
        });
      } else {
        icon = leaflet.icon({
          ...iconData,
        });
      }
      leaflet.marker({
        lat: point[ZERO].latitude,
        lng: point[ZERO].longitude,
      },
      {
        icon,
      })
      .addTo(mapRef.current)
      .bindPopup(titles[index]);
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
  currentOffer: PropTypes.number,
};

const mapStateToProps = (state) => ({
  currentOffer: state.currentOffer,
});

export {Map};
export default connect(mapStateToProps)(Map);
