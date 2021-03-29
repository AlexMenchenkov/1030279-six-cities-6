import PropTypes from "prop-types";
import {propTypesCard} from '/src/prop-types.js';

export const props = {
  handleLoadDataClick: PropTypes.func,
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  isNotUpdateRoom: PropTypes.bool,
  needChangeMarker: PropTypes.bool,
};
