import PropTypes from "prop-types";
import {propTypesReview} from '/src/prop-types';

export const props = {
  comments: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesReview.isRequired,
      ),
  ).isRequired,
  statusAuth: PropTypes.string.isRequired,
  checkedAuth: PropTypes.bool.isRequired,
};
