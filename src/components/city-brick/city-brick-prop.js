import PropTypes from "prop-types";

export const props = {
  city: PropTypes.string.isRequired,
  changeCityDispatch: PropTypes.func.isRequired,
  cityChecked: PropTypes.string,
  checked: PropTypes.bool.isRequired,
};
