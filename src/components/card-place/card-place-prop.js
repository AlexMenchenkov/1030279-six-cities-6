import PropTypes from "prop-types";
import {propTypesCard} from '/src/prop-types';

export const props = {
  maxWidth: PropTypes.number,
  isNotUpdateRoom: PropTypes.bool,
  needChangeMarker: PropTypes.bool,
  width: PropTypes.number,
  saveOfferId: PropTypes.func.isRequired,
  handleLoadDataClick: PropTypes.func,
  changeFavoritesStatusDispatch: PropTypes.func.isRequired,
  height: PropTypes.number,
  id: PropTypes.number,
  offer: PropTypes.shape(
      propTypesCard.isRequired,
  ),
};
