export const ActionType = {
  CHANGE_CITY: `header/changeCity`,
  REQUIRED_AUTHORIZATION: `auth/requiredAuthorization`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_FAVORITES: `favorites/loadFavorites`,
  CHANGE_FAVORITES: `favorites/changeFavorites`,
  LOAD_OFFER: `offers/loadOffer`,
  LOAD_NEARBY_OFFERS: `offers/loadNearbyOffers`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
  USER_DATA: `user/saveUserData`,
  ACTIVE_OFFER: `offers/saveActiveIdForMap`,
  LOG_HISTORY: `history/saveHistory`,
  GET_COMMENTS: `comments/saveComments`,
  SEND_COMMENT: `comments/sendComment`,
  SORT_OFFERS: `offers/sortOffers`,
  SHOW_FILTER: `offers/showFilter`,
  CLEAR_DATA_ROOM: `data/clearDataRoom`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites,
  }),
  changeFavoritesStatus: (data) => ({
    type: ActionType.CHANGE_FAVORITES,
    payload: data,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  saveUserData: (data) => ({
    type: ActionType.USER_DATA,
    payload: data,
  }),
  saveActiveIdForMap: (id) => ({
    type: ActionType.ACTIVE_OFFER,
    payload: id,
  }),
  saveHistory: (path) => ({
    type: ActionType.LOG_HISTORY,
    payload: path,
  }),
  saveComments: (data) => ({
    type: ActionType.GET_COMMENTS,
    payload: data,
  }),
  submitReview: (data) => ({
    type: ActionType.SEND_COMMENT,
    payload: data,
  }),
  sortOffers: (data) => ({
    type: ActionType.SORT_OFFERS,
    payload: data,
  }),
  showFilter: (data) => ({
    type: ActionType.SHOW_FILTER,
    payload: data,
  }),
  clearDataRoom: (data) => ({
    type: ActionType.CLEAR_DATA_ROOM,
    payload: data,
  }),
};
