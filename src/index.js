import React from 'react';
import ReactDOM from 'react-dom';
import App from '/src/components/app/app.jsx';
import {offers} from '/src/mocks/offers.js';
import {createAPI} from '/src/api/api.js';
import {ActionCreator} from '/src/store/action.js';
import {AuthorizationStatus} from '/src/consts.js';
import {reducer} from './store/reducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        // applyMiddleware(redirect)
    ),
);

// store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
      />,
    </Provider>,
    document.getElementById(`root`)
);
