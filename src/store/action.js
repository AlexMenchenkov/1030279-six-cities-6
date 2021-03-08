export const ActionType = {
  CHANGE_CITY: `header/changeCity`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_CITIES: `data/loadCities`,
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
  loadCities: (cities) => ({
    type: ActionType.LOAD_CITIES,
    payload: cities,
  }),
};

