import {ActionType} from '/src/store/action.js';

const initialState = {
  cityChecked: `Paris`,
  isDataLoaded: false,
  isNearbyLoaded: false,
  statusAuth: `NO_AUTH`,
  checkedAuth: false,
  isRoomLoaded: false,
  currentOffer: null,
  history: `/`,
  isCommentsLoaded: false,
  sortId: 0,
  isShow: false,
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
    case ActionType.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        offerNearby: action.payload,
        isNearbyLoaded: true,
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
    case ActionType.CURRENT_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
      };
    case ActionType.LOG_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    case ActionType.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
      };
    case ActionType.SORT_OFFERS:
      return {
        ...state,
        sortId: action.payload,
      };
    case ActionType.SHOW_FILTER:
      return {
        ...state,
        isShow: action.payload,
      };
    default: {
      break;
    }
  }

  return state;
};

export {reducer};
