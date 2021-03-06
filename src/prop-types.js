import PropTypes from 'prop-types';

const coordsMap = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
};

const hostProps = {
  avatarUrl: PropTypes.string,
  id: PropTypes.number,
  isPro: PropTypes.bool,
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
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  location: PropTypes.shape(
      coordsMap,
  ),
  maxAdults: PropTypes.number,
  previewImage: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
};

export const propTypesComments = {
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape(
      {
        avatarUrl: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isPro: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
      },
  ),
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
