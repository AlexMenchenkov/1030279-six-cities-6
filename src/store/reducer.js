import {ActionType} from '/src/store/action.js';

const initialState = {
  cityChecked: `Paris`,
  isDataLoaded: false,
  statusAuth: `NO_AUTH`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        cityChecked: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        statusAuth: action.payload,
      };
    case ActionType.USER_DATA:
      return {
        ...state,
        data: action.payload,
      };
  }

  return state;
};

export {reducer};
