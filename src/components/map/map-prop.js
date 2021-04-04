import PropTypes from "prop-types";

export const props = {
  styleMap: PropTypes.shape(
      {
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        margin: PropTypes.string,
      },
  ),
  activeIdForMap: PropTypes.number,
  roomId: PropTypes.number,
  points: PropTypes.array,
  titles: PropTypes.array,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
};
