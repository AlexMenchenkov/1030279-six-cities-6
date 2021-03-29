import PropTypes from "prop-types";
import {propTypesCard, propTypesComments} from '/src/prop-types';

export const props = {
  offerNearbyForCardList: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  offer: PropTypes.shape(
      propTypesCard,
  ),
  offerNearbyStore: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  responseFavorites: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  isRoomLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  clearDataRoomDispatch: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  isNearbyLoaded: PropTypes.bool.isRequired,
  changeFavoritesStatusDispatch: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesComments
      ),
  ),
};
