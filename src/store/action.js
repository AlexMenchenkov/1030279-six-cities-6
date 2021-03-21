export const ActionType = {
  CHANGE_CITY: `header/changeCity`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_OFFERS: `user/loadOffers`,
  LOAD_OFFER: `user/loadOffer`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`,
  USER_DATA: `user/saveUserData`,
  CURRENT_OFFER: `user/saveCurrentOffer`,
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
  })
};
