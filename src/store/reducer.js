import {ActionType} from '/src/store/action.js';

const initialState = {
  cityChecked: `Paris`,
  isDataLoaded: false,
  statusAuth: `NO_AUTH`,
  checkedAuth: false,
  isRoomLoaded: false,
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
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        isRoomLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        statusAuth: action.payload.auth,
        checkedAuth: action.payload.checkedAuth,
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
