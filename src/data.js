import {OffersType} from './consts.js';

export const offers = [
  {
    img: `img/apartment-01.jpg`,
    isPremium: true,
    price: 120,
    id: 1,
    rate: 80,
    type: OffersType.APARTMENT,
    title: `Beautiful &amp; luxurious apartment at great location`,
  },
  {
    img: `img/room.jpg`,
    isPremium: false,
    price: 80,
    id: 2,
    rate: 80,
    type: OffersType.ROOM,
    title: `Wood and stone place`,
  },
  {
    img: `img/apartment-01.jpg`,
    isPremium: false,
    price: 132,
    id: 3,
    rate: 80,
    type: OffersType.APARTMENT,
    title: `Canal View Prinsengracht`,
  },
  {
    img: `img/apartment-03.jpg`,
    isPremium: true,
    price: 180,
    id: 4,
    rate: 100,
    type: OffersType.APARTMENT,
    title: `Nice, cozy, warm big bed apartment`,
  },
  {
    img: `img/room.jpg`,
    isPremium: false,
    price: 80,
    id: 5,
    rate: 80,
    type: OffersType.ROOM,
    title: `Wood and stone place`,
  },
];

export default offers;
