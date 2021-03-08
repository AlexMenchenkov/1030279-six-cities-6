import {ActionType} from '/src/store/action.js';

const initialState = {
  cityChecked: `Paris`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const nextCity = action.payload;

      return {
        ...state,
        cityChecked: nextCity,
      };
    case ActionType.LOAD_CITIES:
      const nextCities = action.payload;

      return {
        ...state,
        dataCities: nextCities,
      };
  }

  return state;
};

export {reducer};
