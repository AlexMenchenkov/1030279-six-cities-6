import PropTypes from "prop-types";
import {propTypesCard} from '/src/prop-types';

export const props = {
  favoriteOffers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  city: PropTypes.string.isRequired,
};
