import PropTypes from "prop-types";

export const props = {
  getOffers: PropTypes.func,
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
