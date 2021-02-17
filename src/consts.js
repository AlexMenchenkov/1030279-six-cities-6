import PropTypes from "prop-types";

export const OffersType = {
  APARTMENT: `Apartment`,
  ROOM: `Private room`,
  HOUSE: `House`,
};

export const propTypesCard = {
  img: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
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

export const ONE = 1;

export const starsData = [
  `terribly`,
  `badly`,
  `not bad`,
  `good`,
  `perfect`,
];
