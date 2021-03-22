export const ActionType = {
  CHANGE_CITY: `header/changeCity`,
  REQUIRED_AUTHORIZATION: `auth/requiredAuthorization`,
  LOAD_OFFERS: `offers/loadOffers`,
  LOAD_OFFER: `offers/loadOffer`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`,
  USER_DATA: `user/saveUserData`,
  CURRENT_OFFER: `offers/saveCurrentOffer`,
  LOG_HISTORY: `history/saveHistory`,
  GET_COMMENTS: `comments/saveComments`,
  SEND_COMMENT: `comments/sendComment`,
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
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  saveUserData: (data) => ({
    type: ActionType.USER_DATA,
    payload: data,
  }),
  saveCurrentOffer: (id) => ({
    type: ActionType.CURRENT_OFFER,
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
};
