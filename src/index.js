import React from "react";
import ReactDOM from "react-dom";
import App from '/src/components/app/app.jsx';

let data = [
  {
    img: `img/apartment-01.jpg`,
    isPremium: true,
    price: 120,
    offerId: 1,
    rate: `80%`,
    type: `Apartment`,
    title: `Beautiful &amp; luxurious apartment at great location`,
  },
  {
    img: `img/room.jpg`,
    isPremium: false,
    price: 80,
    offerId: 2,
    rate: `80%`,
    type: `Private room`,
    title: `Wood and stone place`,
  },
  {
    img: `img/apartment-01.jpg`,
    isPremium: false,
    price: 132,
    offerId: 3,
    rate: `80%`,
    type: `Apartment`,
    title: `Canal View Prinsengracht`,
  },
  {
    img: `img/apartment-03.jpg`,
    isPremium: true,
    price: 180,
    offerId: 4,
    rate: `100%`,
    type: `Apartment`,
    title: `Nice, cozy, warm big bed apartment`,
  },
];

// Точечно, но в данной реализации, когда мало элементов мне кажется можно так сделать
data[4] = data[1];

ReactDOM.render(
    <App
      data={data}
    />,
    document.getElementById(`root`)
);
