import {APIRoute, AuthorizationStatus} from '/src/consts';
import {AppRoute} from '/src/consts';
import {nameSpace} from '/src/store/root-reducer';
import {dataMappingOffers, dataMappingUser, dataMappingComments} from '/src/utils';
import {
  loadOffers,
  loadFavorites,
  changeFavoritesStatus,
  loadOffer,
  loadNearbyOffers,
  saveUserData,
  requireAuthorization,
  redirectToRoute,
  submitReview,
  saveComments,
} from './action';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const offers = dataMappingOffers(data);
      dispatch(loadOffers(offers, true));
    })
);

export const fetchFavoritesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({data}) => {
      const offers = dataMappingOffers(data);
      dispatch(loadFavorites(offers));
    })
);

export const changeFavoriteStatus = (id, status, isNotUpdateRoom) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
    .then(({data}) => {
      const offer = dataMappingOffers(data);
      const responseFavorites = _getState()[nameSpace.DATA].responseFavorites.filter((favoriteOffer) => favoriteOffer.id !== offer.id);
      responseFavorites.push(offer);
      dispatch(changeFavoritesStatus({responseFavorites, isNotUpdateRoom}));
    })
    .catch(() => {
      location.href = AppRoute.LOGIN;
    })
);

export const fetchLoadOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => {
      const offer = dataMappingOffers(data);
      dispatch(loadOffer(offer));
    })
    .catch(() => {
      location.href = AppRoute.NOT_FOUND;
    })
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}/nearby`)
    .then(({data}) => {
      const offers = dataMappingOffers(data);
      dispatch(loadNearbyOffers([...offers, _getState()[nameSpace.DATA].offer]));
    })
    .catch(() => {
      location.href = AppRoute.NOT_FOUND;
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => dispatch(saveUserData(dataMappingUser(response.data))))
    .then(() => dispatch(requireAuthorization({
      auth: AuthorizationStatus.AUTH,
      checkedAuth: true,
    })))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => dispatch(saveUserData(dataMappingUser(response.data))))
    .then(() => dispatch(requireAuthorization({
      auth: AuthorizationStatus.AUTH,
      checkedAuth: true,
    })))
    .then(() => dispatch(redirectToRoute(_getState()[nameSpace.ROUTE].history)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN_OUT)
    .then(() => dispatch(requireAuthorization({
      auth: AuthorizationStatus.NO_AUTH,
      checkedAuth: true,
    })))
);

export const getComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(saveComments(dataMappingComments(data))))
);

export const sendComment = ({comment, rating, offerId}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${offerId}`, {comment, rating})
    .then(({data}) => dispatch(submitReview(data)))
);
