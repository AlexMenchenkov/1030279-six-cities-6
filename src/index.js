import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/components/app/app.jsx';
import {offers} from '/src/mocks/offers.js';
import {reducer} from './store/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
      />,
    </Provider>,
    document.getElementById(`root`)
);
