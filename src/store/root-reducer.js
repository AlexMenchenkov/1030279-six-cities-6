import {combineReducers} from "redux";
import {user} from './user/user';
import {data} from './data/data';
import {route} from './route/route';

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  ROUTE: `ROUTE`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.ROUTE]: route,
});
