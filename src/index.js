import React from "react";
import ReactDOM from "react-dom";
import App from '/src/components/app/app.jsx';

let data = [
  {
    img: `img/apartment-01.jpg`,
    isPremium: true,
    price: 120,
    rate: `80%`,
    type: `Apartment`,
    name: `Beautiful &amp; luxurious apartment at great location`,
  },
  {
    img: `img/room.jpg`,
    isPremium: false,
    price: 80,
    rate: `80%`,
    type: `Private room`,
    name: `Wood and stone place`,
  },
  {
    img: `img/apartment-01.jpg`,
    isPremium: false,
    price: 132,
    rate: `80%`,
    type: `Apartment`,
    name: `Canal View Prinsengracht`,
  },
  {
    img: `img/apartment-03.jpg`,
    isPremium: true,
    price: 180,
    rate: `100%`,
    type: `Apartment`,
    name: `Nice, cozy, warm big bed apartment`,
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
