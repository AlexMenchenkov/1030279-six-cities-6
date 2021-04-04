import PropTypes from "prop-types";
import {propTypesCard} from '/src/prop-types';

export const props = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  offersForMap: PropTypes.shape(
      {
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number,
        title: PropTypes.array,
        points: PropTypes.array,
      },
  ),
  responseFavorites: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  cityChecked: PropTypes.string.isRequired,
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  sortId: PropTypes.number.isRequired,
  activeIdForMap: PropTypes.number,
  showFilterPanel: PropTypes.bool.isRequired,
};
