import PropTypes from 'prop-types';

const coordsMap = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
};

const hostProps = {
  // eslint-disable-next-line camelcase
  avatar_url: PropTypes.string,
  id: PropTypes.number,
  // eslint-disable-next-line camelcase
  is_pro: PropTypes.bool,
  name: PropTypes.string,
};

const cityProps = {
  location: PropTypes.shape(
      coordsMap,
  ),
  name: PropTypes.string,
};

export const propTypesCard = {
  bedrooms: PropTypes.number,
  city: PropTypes.shape(
      cityProps,
  ),
  description: PropTypes.string,
  goods: PropTypes.array,
  host: PropTypes.shape(
      hostProps,
  ),
  id: PropTypes.number,
  images: PropTypes.array,
  // eslint-disable-next-line camelcase
  is_favorite: PropTypes.bool,
  // eslint-disable-next-line camelcase
  is_premium: PropTypes.bool,
  location: PropTypes.shape(
      coordsMap,
  ),
  // eslint-disable-next-line camelcase
  max_adults: PropTypes.number,
  // eslint-disable-next-line camelcase
  preview_image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
};

export const propTypesReview = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  textComment: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  fullDate: PropTypes.string.isRequired,
};

export const OffersType = {
  APARTMENT: `Apartment`,
  ROOM: `Private room`,
  HOUSE: `House`,
};

export const propTypesMap = {
  iconUrl: PropTypes.string.isRequired,
  iconSize: PropTypes.array.isRequired,
};
