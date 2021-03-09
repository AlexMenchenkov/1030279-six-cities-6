import {APIRoute} from '/src/consts.js';
import {ActionCreator} from './action';

export const fetchCityList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);
