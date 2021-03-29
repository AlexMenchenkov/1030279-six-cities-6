import React, {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {connect} from "react-redux";
import {iconData, iconDataOrange, ONE, ZERO} from '/src/consts';
import {getActiveIdForMap} from '/src/store/user/selectors';
import {props} from './map-prop';

const Map = ({
  points,
  titles,
  latitude,
  longitude,
  coordinatesCity,
  zoom,
  activeIdForMap,
  styleMap,
  roomId,
}) => {
  const mapRef = useRef(null);

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
      let iconActive;
      if (point[ONE].id === (activeIdForMap || roomId)) {
        iconActive = iconDataOrange;
      } else {
        iconActive = iconData;
      }
      const icon = leaflet.icon({
        ...iconActive,
      });
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

  return (<div id="map" style={styleMap} />);
};

Map.propTypes = props;

const mapStateToProps = (state) => ({
  activeIdForMap: getActiveIdForMap(state),
});

export {Map};
export default React.memo(connect(mapStateToProps)(Map));
