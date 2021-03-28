import PropTypes from "prop-types";
import {propTypesReview} from '/src/prop-types.js';

export const props = {
  review: PropTypes.shape(
      propTypesReview.isRequired
  )
};
