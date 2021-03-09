import PropTypes from 'prop-types';

export const coordsMap = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export const propTypesCard = {
  img: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  ...coordsMap,
  points: PropTypes.shape(
      coordsMap,
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

export const OffersType = {
  APARTMENT: `Apartment`,
  ROOM: `Private room`,
  HOUSE: `House`,
};

export const propTypesMap = {
  icon: {
    iconUrl: PropTypes.string.isRequired,
    iconSize: PropTypes.array.isRequired,
  },
  city: {
    zoom: PropTypes.number.isRequired,
    width: PropTypes.string.isRequired,
  },
};
