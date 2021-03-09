export const ActionType = {
  CHANGE_CITY: `header/changeCity`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};

