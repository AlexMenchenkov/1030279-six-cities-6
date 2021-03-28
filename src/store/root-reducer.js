import {combineReducers} from "redux";
import {user} from './user/user';
import {data} from './data/data';
import {route} from './route/route';

export const nameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  ROUTE: `ROUTE`,
};

export default combineReducers({
  [nameSpace.DATA]: data,
  [nameSpace.USER]: user,
  [nameSpace.ROUTE]: route,
});
