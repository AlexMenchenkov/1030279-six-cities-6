import PropTypes from "prop-types";
import {propTypesCard} from '/src/prop-types';

export const props = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
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
  isShow: PropTypes.bool.isRequired,
};
