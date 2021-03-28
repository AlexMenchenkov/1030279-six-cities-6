import PropTypes from "prop-types";

export const props = {
  sortId: PropTypes.number.isRequired,
  showFilterPanel: PropTypes.bool.isRequired,
  showFilterDispatch: PropTypes.func.isRequired,
};
