import {nameSpace} from '/src/store/root-reducer.js';

export const getCityChecked = (state) => state[nameSpace.USER].cityChecked;
export const getSortId = (state) => state[nameSpace.USER].sortId;
export const getStatusAuth = (state) => state[nameSpace.USER].statusAuth;
export const getShowFilterPanel = (state) => state[nameSpace.USER].showFilterPanel;
export const getCheckedAuth = (state) => state[nameSpace.USER].checkedAuth;
export const getActiveIdForMap = (state) => state[nameSpace.USER].activeIdForMap;

