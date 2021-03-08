import {APIRoute} from '/src/consts.js';
import {ActionCreator} from './action';

export const fetchCityList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.CITIES)
    .then(({data}) => dispatch(ActionCreator.loadCities(data)))
);
