import {ActionType} from '/src/store/action';
import {AppRoute} from '/src/consts';

const initialState = {
  history: AppRoute.ROOT,
};

const route = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOG_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
  }

  return state;
};

export {route};
