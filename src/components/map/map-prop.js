import PropTypes from "prop-types";
import {propTypesCard} from '/src/prop-types';

export const props = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  styleMap: PropTypes.shape(
      {
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        margin: PropTypes.string,
      },
  ),
  activeIdForMap: PropTypes.number,
  roomId: PropTypes.number,
};
