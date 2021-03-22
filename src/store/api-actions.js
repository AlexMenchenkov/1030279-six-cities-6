import {APIRoute, AuthorizationStatus} from '/src/consts.js';
import {ActionCreator} from './action';

const dataMappingOffers = (data) => {
  // eslint-disable-next-line camelcase
  const renameData = ({is_favorite, is_premium, max_adults, preview_image, host: {avatar_url, is_pro, id, name}, ...object}) =>
    // eslint-disable-next-line camelcase
    ({isFavorite: is_favorite, isPremium: is_premium, maxAdults: max_adults, previewImage: preview_image, host: {avatarUrl: avatar_url, isPro: is_pro, id, name}, ...object});
  if (data.constructor.name === `Object`) {
    return renameData(data);
  }
  return data.map((offer) => renameData(offer));
};

const dataMappingUser = (data) => {
  // eslint-disable-next-line camelcase
  const renameData = ({avatar_url, is_pro, ...object}) =>
    // eslint-disable-next-line camelcase
    ({avatarUrl: avatar_url, isPro: is_pro, ...object});
  return renameData(data);
};

const dataMappingComments = (data) => {
  // eslint-disable-next-line camelcase
  const renameData = ({user: {avatar_url, is_pro, id, name}, ...object}) =>
    // eslint-disable-next-line camelcase
    ({user: {avatarUrl: avatar_url, isPro: is_pro, id, name}, ...object});
  return data.map((offer) => renameData(offer));
};

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = dataMappingOffers(data);
      dispatch(ActionCreator.loadOffers(offers));
    })
);

export const fetchCurrentOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => {
      const offer = dataMappingOffers(data);
      dispatch(ActionCreator.loadOffer(offer));
    })
    .catch(() => {
      location.href = `/404`;
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => dispatch(ActionCreator.saveUserData(dataMappingUser(response.data))))
    .then(() => dispatch(ActionCreator.requireAuthorization({
      auth: AuthorizationStatus.AUTH,
      checkedAuth: true,
    })))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => dispatch(ActionCreator.saveUserData(dataMappingUser(response.data))))
    .then(() => dispatch(ActionCreator.requireAuthorization({
      auth: AuthorizationStatus.AUTH,
      checkedAuth: true,
    })))
    .then(() => dispatch(ActionCreator.redirectToRoute(_getState().history)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN_OUT)
    .then(() => dispatch(ActionCreator.requireAuthorization({
      auth: AuthorizationStatus.NO_AUTH,
      checkedAuth: true,
    })))
);

export const getComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.saveComments(dataMappingComments(data))))
);

export const sendComment = ({comment, rating, offerId}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${offerId}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.submitReview(data)))
);
