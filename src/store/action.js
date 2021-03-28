export const ActionType = {
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_FAVORITES: `data/loadFavorites`,
  CHANGE_FAVORITES: `data/changeFavorites`,
  LOAD_OFFER: `data/loadOffer`,
  LOAD_NEARBY_OFFERS: `data/loadNearbyOffers`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
  LOG_HISTORY: `route/saveHistory`,
  ACTIVE_OFFER: `map/saveActiveIdForMap`,
  GET_COMMENTS: `data/saveComments`,
  SEND_COMMENT: `data/sendComment`,
  CLEAR_DATA_ROOM: `data/clearDataRoom`,
  SORT_OFFERS: `user/sortOffers`,
  SHOW_FILTER: `user/showFilter`,
  CHANGE_CITY: `user/changeCity`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  USER_DATA: `user/saveUserData`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadFavorites = (favorites) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: favorites,
});

export const changeFavoritesStatus = (data) => ({
  type: ActionType.CHANGE_FAVORITES,
  payload: data,
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});

export const loadNearbyOffers = (offers) => ({
  type: ActionType.LOAD_NEARBY_OFFERS,
  payload: offers,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const saveUserData = (data) => ({
  type: ActionType.USER_DATA,
  payload: data,
});

export const saveActiveIdForMap = (id) => ({
  type: ActionType.ACTIVE_OFFER,
  payload: id,
});

export const saveHistory = (path) => ({
  type: ActionType.LOG_HISTORY,
  payload: path,
});

export const saveComments = (data) => ({
  type: ActionType.GET_COMMENTS,
  payload: data,
});

export const submitReview = (data) => ({
  type: ActionType.SEND_COMMENT,
  payload: data,
});

export const sortOffers = (data) => ({
  type: ActionType.SORT_OFFERS,
  payload: data,
});

export const showFilter = (data) => ({
  type: ActionType.SHOW_FILTER,
  payload: data,
});

export const clearDataRoom = (data) => ({
  type: ActionType.CLEAR_DATA_ROOM,
  payload: data,
});

