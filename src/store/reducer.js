import {ActionType} from '/src/store/action';

const initialState = {
  cityChecked: `Paris`,
  isDataLoaded: false,
  isNearbyLoaded: false,
  statusAuth: `NO_AUTH`,
  checkedAuth: false,
  isRoomLoaded: false,
  activeIdForMap: null,
  history: `/`,
  isCommentsLoaded: false,
  sortId: 0,
  isShow: false,
  needChangeMarker: true,
  responseFavorites: [],
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
        activeIdForMap: action.payload,
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
    case ActionType.HOVER_EFFECT:
      return {
        ...state,
        needChangeMarker: action.payload,
      };
    case ActionType.CLEAR_DATA_ROOM:
      return {
        ...state,
        isCommentsLoaded: false,
        isRoomLoaded: false,
        isNearbyLoaded: false,
      };
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favoritesList: action.payload,
        isFavoritesLoaded: true,
      };
    case ActionType.CHANGE_FAVORITES:
      return {
        ...state,
        responseFavorites: action.payload.responseFavorites,
        isFavoritesLoaded: false,
        isRoomLoaded: action.payload.isNotUpdateRoom,
      };
    default: {
      break;
    }
  }

  return state;
};

export {reducer};
