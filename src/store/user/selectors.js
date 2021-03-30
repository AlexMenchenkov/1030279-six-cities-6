import {nameSpace} from '/src/store/root-reducer';

export const getCityCheckedSelector = (state) => state[nameSpace.USER].cityChecked;
export const getSortIdSelector = (state) => state[nameSpace.USER].sortId;
export const getStatusAuthSelector = (state) => state[nameSpace.USER].statusAuth;
export const getShowFilterPanelSelector = (state) => state[nameSpace.USER].showFilterPanel;
export const getCheckedAuthSelector = (state) => state[nameSpace.USER].checkedAuth;
export const getActiveIdForMapSelector = (state) => state[nameSpace.USER].activeIdForMap;

