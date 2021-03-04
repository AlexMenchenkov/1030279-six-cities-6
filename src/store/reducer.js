import {ActionType} from '/src/store/action.js';
// import questions from '../mocks/questions';
// import {FIRST_GAME_STEP, MAX_MISTAKE_COUNT} from '../const';

const initialState = {
  cityChecked: `Amsterdam`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const nextCity = action.payload;

      return {
        ...state,
        cityChecked: nextCity,
      };
  }

  return state;
};

export {reducer};
