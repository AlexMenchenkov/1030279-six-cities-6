import PropTypes from "prop-types";
import {propTypesCard} from '/src/prop-types';

export const props = {
  offers: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.shape(
          propTypesCard,
      )),
  ),
};
