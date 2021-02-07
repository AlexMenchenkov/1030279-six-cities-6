import React from "react";
import ReactDOM from "react-dom";
import App from '/src/components/app/app.jsx';
import offers from './data.js';

ReactDOM.render(
    <App
      data={offers}
    />,
    document.getElementById(`root`)
);
