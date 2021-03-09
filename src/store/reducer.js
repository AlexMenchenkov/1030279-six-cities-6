import {ActionType} from '/src/store/action.js';

const initialState = {
  cityChecked: `Paris`,
  isDataLoaded: false,
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
  }

  return state;
};

export {reducer};
