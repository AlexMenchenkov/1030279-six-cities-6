import {FACTOR_RATE, INDEXOF_FAIL_CODE, ONE} from '/src/consts.js';

export const sortByPriceLowToHigth = (cardA, cardB) => cardA.price - cardB.price;
export const sortByHigthToLow = (property) => (cardA, cardB) => cardA[property] < cardB[property] ? ONE : INDEXOF_FAIL_CODE;
export const getRatingWidth = (rating) => `${Math.round(rating) * FACTOR_RATE}%`;

export const dataMappingOffers = (data) => {
  // eslint-disable-next-line camelcase
  const renameData = ({is_favorite, is_premium, max_adults, preview_image, host: {avatar_url, is_pro, id, name}, ...object}) =>
    // eslint-disable-next-line camelcase
    ({isFavorite: is_favorite, isPremium: is_premium, maxAdults: max_adults, previewImage: preview_image, host: {avatarUrl: avatar_url, isPro: is_pro, id, name}, ...object});
  if (data.constructor.name === `Object`) {
    return renameData(data);
  }
  return data.map((offer) => renameData(offer));
};

export const dataMappingUser = (data) => {
  // eslint-disable-next-line camelcase
  const renameData = ({avatar_url, is_pro, ...object}) =>
    // eslint-disable-next-line camelcase
    ({avatarUrl: avatar_url, isPro: is_pro, ...object});
  return renameData(data);
};

export const dataMappingComments = (data) => {
  // eslint-disable-next-line camelcase
  const renameData = ({user: {avatar_url, is_pro, id, name}, ...object}) =>
    // eslint-disable-next-line camelcase
    ({user: {avatarUrl: avatar_url, isPro: is_pro, id, name}, ...object});
  return data.map((offer) => renameData(offer));
};
