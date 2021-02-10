import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/components/app/app.jsx';
import offers from '/src/mocks/offers.js';

ReactDOM.render(
    <App
      offers={offers}
    />,
    document.getElementById(`root`)
);
