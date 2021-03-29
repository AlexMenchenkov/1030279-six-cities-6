import PropTypes from "prop-types";
import {propTypesReview} from '/src/prop-types';

export const props = {
  review: PropTypes.shape(
      propTypesReview.isRequired
  )
};
