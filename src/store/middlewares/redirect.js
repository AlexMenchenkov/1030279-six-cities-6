import browserHistory from '/src/browser-history.js';
import {ActionType} from '/src/store/action.js';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
