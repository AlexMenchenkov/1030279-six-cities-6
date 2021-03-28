import {ZERO} from '/src/consts.js';
import {ActionType} from '/src/store/action.js';

const initialState = {
  cityChecked: `Paris`,
  statusAuth: `NO_AUTH`,
  checkedAuth: false,
  activeIdForMap: null,
  sortId: ZERO,
  showFilterPanel: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        cityChecked: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        statusAuth: action.payload.auth,
        checkedAuth: action.payload.checkedAuth,
      };
    case ActionType.ACTIVE_OFFER:
      return {
        ...state,
        activeIdForMap: action.payload,
      };
    case ActionType.SORT_OFFERS:
      return {
        ...state,
        sortId: action.payload,
      };
    case ActionType.SHOW_FILTER:
      return {
        ...state,
        showFilterPanel: action.payload,
      };
  }
  return state;
};

export {user};
