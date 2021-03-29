import {FACTOR_RATE, INDEXOF_FAIL_CODE, ONE} from '/src/consts.js';

export const sortByPriceLowToHigth = (cardA, cardB) => cardA.price - cardB.price;
export const sortByHigthToLow = (property) => (cardA, cardB) => cardA[property] < cardB[property] ? ONE : INDEXOF_FAIL_CODE;

export const getRatingWidth = (rating) => `${Math.round(rating) * FACTOR_RATE}%`;

