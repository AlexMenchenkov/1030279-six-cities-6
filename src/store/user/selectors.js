import {NameSpace} from '/src/store/root-reducer';

export const getCityCheckedSelector = (state) => state[NameSpace.USER].cityChecked;
export const getSortIdSelector = (state) => state[NameSpace.USER].sortId;
export const getStatusAuthSelector = (state) => state[NameSpace.USER].statusAuth;
export const getShowFilterPanelSelector = (state) => state[NameSpace.USER].showFilterPanel;
export const getCheckedAuthSelector = (state) => state[NameSpace.USER].checkedAuth;
export const getActiveIdForMapSelector = (state) => state[NameSpace.USER].activeIdForMap;

