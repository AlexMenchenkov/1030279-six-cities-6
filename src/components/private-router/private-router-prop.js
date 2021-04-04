import PropTypes from "prop-types";

export const props = {
  statusAuth: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  checkedAuth: PropTypes.bool.isRequired,
};
