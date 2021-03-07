import {OffersType} from '/src/prop-types.js';

export const offers = [
  {
    Paris: {
      img: `img/apartment-01.jpg`,
      isPremium: true,
      price: 120,
      id: 1,
      rate: 80,
      type: OffersType.APARTMENT,
      title: `Beautiful &amp; luxurious apartment at great location`,
      count: 433,
      lat: 48.864716,
      lng: 2.349014,
    },
  },
  {
    Cologne: {
      img: `img/room.jpg`,
      isPremium: false,
      price: 80,
      id: 2,
      rate: 80,
      type: OffersType.ROOM,
      title: `Wood and stone place`,
      count: 4323,
      lat: 50.935173,
      lng: 6.953101,
    }
  },
  {
    Brussels: {
      img: `img/apartment-01.jpg`,
      isPremium: false,
      price: 132,
      id: 3,
      rate: 80,
      type: OffersType.APARTMENT,
      title: `Canal View Prinsengracht`,
      count: 1423,
      lat: 50.85045,
      lng: 4.34878,
    }
  },
  {
    Amsterdam: {
      img: `img/apartment-03.jpg`,
      isPremium: true,
      price: 180,
      id: 4,
      rate: 100,
      type: OffersType.APARTMENT,
      title: `Nice, cozy, warm big bed apartment`,
      count: 43,
      lat: 52.377956,
      lng: 4.897070,
    }
  },
  {
    Hamburg: {
      img: `img/room.jpg`,
      isPremium: false,
      price: 80,
      id: 5,
      rate: 80,
      type: OffersType.ROOM,
      title: `Wood and stone place`,
      count: 32,
      lat: 53.551086,
      lng: 9.993682,
    }
  },
  {
    Dusseldorf: {
      img: `img/apartment-03.jpg`,
      isPremium: true,
      price: 180,
      id: 4,
      rate: 100,
      type: OffersType.APARTMENT,
      title: `Nice, cozy, warm big bed apartment`,
      count: 88,
      lat: 51.233334,
      lng: 6.783333,
    }
  },
];
