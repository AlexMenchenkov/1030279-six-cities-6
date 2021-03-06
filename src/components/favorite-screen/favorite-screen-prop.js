import PropTypes from "prop-types";
import {propTypesCard} from '/src/prop-types';

export const props = {
  favoritesList: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  responseFavorites: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  isFavoritesLoaded: PropTypes.bool,
  uniqueCityes: PropTypes.array,
  onLoadFavorites: PropTypes.func.isRequired,
};
