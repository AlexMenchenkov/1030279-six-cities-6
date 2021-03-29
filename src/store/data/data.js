import {ActionType} from '/src/store/action.js';

const initialState = {
  offers: [],
  isDataLoaded: false,
  isNearbyLoaded: false,
  isRoomLoaded: false,
  isCommentsLoaded: false,
  responseFavorites: [],
  data: {
    avatarUrl: ``,
    isPro: false,
    id: null,
    email: ``,
    name: ``,
  },
  offerNearby: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.USER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ActionType.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true,
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
        isRoomLoaded: action.payload.isNotUpdateRoom,
      };
  }

  return state;
};

export {data};
