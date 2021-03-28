import PropTypes from "prop-types";

export const props = {
  email: PropTypes.string,
  statusAuth: PropTypes.string.isRequired,
  handleLogoutSubmit: PropTypes.func.isRequired,
  handleLogHistory: PropTypes.func,
};
