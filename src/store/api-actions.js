import {APIRoute} from '/src/consts.js';
import {ActionCreator} from './action';

const dataMapping = (data) => {
  // eslint-disable-next-line camelcase
  const renameData = ({is_favorite, is_premium, max_adults, preview_image, host: {avatar_url, is_pro, id, name}, ...object}) =>
    // eslint-disable-next-line camelcase
    ({isFavorite: is_favorite, isPremium: is_premium, maxAdults: max_adults, previewImage: preview_image, host: {avatarUrl: avatar_url, isPro: is_pro, id, name}, ...object});
  return data.map((offer) => renameData(offer));
};

export const fetchCityList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = dataMapping(data);
      dispatch(ActionCreator.loadOffers(offers));
    })
);
